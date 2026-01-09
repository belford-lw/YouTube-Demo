import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Api } from "../../service/Api";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import Video from "../video/Video";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Api.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        if (data?.items?.length) {
          setVideoDetail(data.items[0]);
        }
        const relatedData = await Api.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        console.log(relatedData);

        setRelatedVideo(relatedData.items);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box minHeight="90vh" p={2}>
      <Box display="flex" gap={2}>
        <Box width="75%" height="500px">
          <iframe
            height={"707vh"}
            width={"100%"}
            src={`https://www.youtube.com/embed/${id}`}
          />

          {videoDetail?.snippet?.tags?.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant="outlined"
            />
          ))}

          <Typography variant="h5" fontWeight={"bold"} p={2}>
            {videoDetail?.snippet?.title}
          </Typography>

          <Typography variant="subtitle2" sx={{ opacity: ".7" }} p={2}>
            {parseInt(videoDetail?.snippet?.description)}
          </Typography>

          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems={"center"}
            py={1}
            px={2}
          >
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <Visibility />
              {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()}
              views
            </Stack>
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <FavoriteOutlined />
              {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()}
              likes
            </Stack>
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <MarkChatRead />
              {parseInt(
                videoDetail?.statistics?.commentCount
              ).toLocaleString()}{" "}
              coment
            </Stack>
          </Stack>
          <Stack direction={"row"} py={1} px={2}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"5px"}
              marginTop={"5px"}
            >
              <Avatar
                alt={videoDetail?.snippet?.channelTitle}
                src={videoDetail?.snippet?.thumbnails?.default?.url}
              />
              <Typography variant="subtitle2" color="gray">
                {videoDetail?.snippet?.channelTitle}
                <CheckCircle
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <Video video={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;

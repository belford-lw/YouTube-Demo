import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";


const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId;

  if (!videoId) return null;

  return (
    <Card sx={{ width: "320px", boxShadow: "md", borderRadius: "10px" }}>
      <Link to={`/video/${videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{ width: "360px", height: "180px" }}
        />
      </Link>

      <CardContent
        sx={{
          height: "200px",
          position: "relative",
          background: 'white',
        }}
        boxShadow={"md"}
      >
        <Link to={`/video/${videoId}`} style={{ textDecoration: "none" }}>
          <Typography my={1} sx={{ opacity: 0.6 }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold">
            {video?.snippet?.title?.slice(0, 50)}
          </Typography>

          <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
            {video?.snippet?.description?.slice(0, 80)}
          </Typography>
        </Link>

        <Stack
          direction="row"
          position="absolute"
          bottom="10px"
          alignItems="center"
          gap={1}
        >
          <Avatar src={video?.snippet?.thumbnails?.high?.url} />
          <Typography variant="body2">
            {video?.snippet?.channelTitle}
          </Typography>
          <CheckCircle sx={{ fontSize: 12, color: "gray" }} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../service/Api";
import { Box, Container } from "@mui/material";
import { ChannelCard, Video } from "../../index";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await Api.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail.items[0]);

        const dataVideo = await Api.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideo(dataVideo?.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box
      minHeight={{
        xs: "100vh",
        md: "95vh",
      }}
      mt={{
        xs: "0",
        sm: "1vh",
      }}
    >
      <Box>
        <Box
          width="100%"
          height={{
            xs: "120px",   
            sm: "160px",  
            md: "200px",   
          }}
          zIndex={10}
          sx={{
            backgroundImage: `url(
              ${channelDetail?.brandingSettings?.image?.bannerExternalUrl}
            )`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard
          video={channelDetail}
          marginTop={{
            xs: "-60px",  
            sm: "-80px",   
            md: "-100px",
          }}
        />
      </Box>
      <Container
        maxWidth={false}
        sx={{
          px: {
            xs: 1,
            sm: 2,
            md: 3,
          },
        }}
      >
        <Video video={video} />
      </Container>
    </Box>
  );
};

export default Channel;

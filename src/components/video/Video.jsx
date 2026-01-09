import { Box, Stack } from "@mui/material";
import { ChannelCard, VideoCard } from "../../";

const Video = ({ video }) => {
  return (
    <>
      <Stack
        direction={"row"}
        width={"100%"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
      >
        {video.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard video={item} />}
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Video;

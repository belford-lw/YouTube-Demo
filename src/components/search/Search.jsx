import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Video } from "../../index";
import { Api } from "../../service/Api";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Api.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth="90%">
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Qidirilgan <span style={{ color: "yellow" }}>{id}</span> Videolar
        </Typography>

        <Video video={videos} />
      </Container>
    </Box>
  );
};

export default Search;

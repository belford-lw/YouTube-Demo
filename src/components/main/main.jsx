import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { Category, Video } from "../../index";
import { Api } from "../../service/Api";

const Main = () => {
  const [selectedCategory, setSelectedCatagory] = useState("New");

  const selectedCategoryHandle = (catrgory) =>
    setSelectedCatagory(catrgory);

  const [video, setVideo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Api.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideo(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [selectedCategory]);

  return (
    <Box>
      <Category
        selectedCategoryHandle={selectedCategoryHandle}
        selectedCategory={selectedCategory}
      />
      <Box
        p={{
          xs: 1,
          sm: 2,
        }}
        sx={{
          height: {
            xs: "auto",
            md: "90vh",
          },
          mt: {
            xs: "120px",
            sm: "130px",
            md: "140px",
          },
        }}
      >
        <Container maxWidth={false}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "20px",
                sm: "26px",
                md: "32px",
              },
              ml: {
                xs: 0,
                md: "-220px",
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
              mb: 2,
            }}
          >
            {selectedCategory}{" "}
            <span style={{ color: colors.color }}>Videos</span>
          </Typography>
        </Container>

        <Video video={video} />
      </Box>
    </Box>
  );
};

export default Main;

import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ video, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: {
          xs: "100%",
          sm: "356px",
          md: "320px",
        },
        height: {
          xs: "auto",
          md: "326px",
        },

        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link
        to={`/channel/${video?.id?.channelId ? video?.id?.channelId : video?.id}`}
        style={{ textDecoration: "none" }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            px: {
              xs: 1,
              sm: 2,
            },
          }}
        >
          <CardMedia
            image={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: {
                xs: "120px",
                sm: "150px",
                md: "180px",
              },
              width: {
                xs: "120px",
                sm: "150px",
                md: "180px",
              },

              mb: 2,
              border: "1px solid #e3e3e3",
              margin: "0 auto",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
              },
              lineHeight: 1.3,
            }}
          >
            {video?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                },
                color: "blue",
                ml: "5px",
              }}
            />
          </Typography>
          {video?.statistics?.subscriberCount && (
            <Typography
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "15px",
                },
                fontWeight: 500,
                color: "gray",
                mt: 0.5,
              }}
            >
              {parseInt(video?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;

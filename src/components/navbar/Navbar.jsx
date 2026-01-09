import { IconButton, Stack, Typography } from "@mui/material";
import youtubeLogo from "../../../public/assets/youtube.png";
import { SearchBar } from "../../index";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1100,
          boxShadow: 2,
        }}
        height={"75px"}
        bgcolor={"white"}
        boxShadow={"md"}
      >
        <img width={"150px"} src={youtubeLogo} alt="jpg" />
        <SearchBar />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1 }}>
          <Typography
            sx={{
              px: { md: 2 },
              py: { md: 1 },
              borderRadius: "30px",
              bgcolor: "gray",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: { md: "14px", lg: "15px" },
              display: { xs: "none", md: "block" }
            }}
          >
            + Yaratish
          </Typography>

          <IconButton sx={{ p: { xs: "4px", sm: "6px" } }}>
            <NotificationsNoneIcon sx={{ fontSize: { xs: "20px", sm: "24px" } }} />
          </IconButton>

          <button className="w-25 cursor-pointer p-3 shadow-lg rounded-2xl">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>           
          </button>
        </Stack>
      </Stack>
    </div>
  );
};

export default Navbar;

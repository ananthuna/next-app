import { Box, Button, Typography } from "@mui/material";
import { FaFacebookMessenger } from "react-icons/fa";

export default function TopBanner({ colors }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "white",
        p: "1rem",
      }}
    >
      {/* banner image */}
      <Box sx={{ width: "100%" }}>
        <img src={"/banner.png"} width={620} height={600}></img>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          m: "10rem",
        }}
      >
        {/* banner heading */}
        <Box sx={{ display: "flex",alignItems:'center',justifyContent:'center' }}>
          <Typography
            sx={{
              fontSize: "3.7rem",
              fontWeight: "900",
              lineHeight: 1.1,
            }}
          >
            Scan, Order & Pay
            <img src={"/tick.png"} width={80} height={50}></img>
          </Typography>
        </Box>

        {/* description */}
        <Typography>
          QR Code Menu for Scan, Order and Pay Increase orders, decrease
          overheads, and grow your brand. Sign Up For Free Today!
        </Typography>

        {/* button */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "10rem",
              height: "1.7rem",
              textTransform: "none",
              borderRadius: 0,
              bgcolor: `${colors.button}`,
              "&:hover": {
                bgcolor: `${colors.button}`,
                boxShadow: 0,
              },
              boxShadow: 0,
            }}
          >
            Sign Up
          </Button>
          <Button
            sx={{
              width: "10rem",
              height: "1.7rem",
              textTransform: "none",
              borderRadius: 0,
              fontWeight: "400",
              color: `${colors.light}`,
              border: `1px solid ${colors.light}`,
            }}
          >
            View Demo
          </Button>
        </Box>
      </Box>

      {/* chat button */}
      <Box
        sx={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
          bgcolor: `${colors.button}`,
          p: 0.7,
          borderRadius: 4,
          color: "white",
        }}
      >
        <FaFacebookMessenger fontSize={20} mathematical={0.5} />
        <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, mr: 0.5 }}>
          Chat
        </Typography>
      </Box>
    </Box>
  );
}

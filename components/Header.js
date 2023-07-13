"use client";
import { Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header({ colors }) {
  const menu = ["Login", "Pricing", "View Demo", "Book Demo"];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: `${colors.headerbg}`,
        p: "1.5rem",
      }}
    >
      {/* Icon and Name */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <img src="/icon.png" width={55} height={50}></img>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "500",
          }}
        >
          Orderlina
        </Typography>
        <SearchIcon
          sx={{
            fontSize: "1rem",
          }}
        />
      </Box>

      {/* Menu list and sign up button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 4,
        }}
      >
        {menu.map((item, index) => (
          <Typography key={index}>{item}</Typography>
        ))}
        <Button
          variant="contained"
          sx={{
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
      </Box>
    </Box>
  );
}

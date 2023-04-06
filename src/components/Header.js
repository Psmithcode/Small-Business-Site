import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router";
// import MenuIcon from "@mui/icons-material/Menu";
import cookie from "cookie";
export default function ButtonAppBar() {
  const cookies = cookie.parse(document.cookie);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ backgroundColor: "green" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Lubbock Small Business
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/");
            }}
          >
            Listings
          </Button>
          {cookies.loggedIn && (
            <Button
              color="inherit"
              onClick={() => {
                navigate("/addBusiness");
              }}
            >
              Add
            </Button>
          )}
          <Button
            color="inherit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      
    </Box>

  );
}

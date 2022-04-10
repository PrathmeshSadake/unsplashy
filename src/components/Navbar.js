import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import NavbarDrawer from "./NavbarDrawer";
import NavbarUserMenu from "./NavbarUserMenu";
import LOGO from "./images/logo.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard"];

const Navbar = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isAboveMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ color: "#000", paddingY: ".5rem" }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isAboveMdScreen ? (
            <>
              {/* Medium size screen title */}
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "block" } }}
              >
                <div>
                  <img src={LOGO} alt="Unsplashy" />
                </div>
              </Typography>

              {/* Page buttons */}
              <Box
                sx={{
                  flexGrow: 1,
                  marginLeft: "5rem",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </>
          ) : (
            <>
              {/* Menu icon button and drawer */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                <NavbarDrawer
                  pagesList={pages}
                  isDrawerOpen={isDrawerOpen}
                  toggleDrawer={toggleDrawer}
                />
              </Box>

              {/* Small screen title */}
              <Typography
                variant="h6"
                noWrap
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <div>
                   <img src={LOGO} alt="Unsplashy" />
                </div>
              </Typography>
            </>
          )}

          {/* User menu and logout button */}
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              gap: "1.5rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>

              <NavbarUserMenu
                settingsList={settings}
                anchorElUser={anchorElUser}
                handleCloseUserMenu={handleCloseUserMenu}
                handleLogout={handleLogout}
              />

              {isAboveMdScreen && (
                <Typography
                  component="span"
                  sx={{
                    marginLeft: "0.5rem",
                  }}
                >
                  {user && user.email}
                </Typography>
              )}
            </Box>

            {isAboveMdScreen && <Button onClick={handleLogout}>Logout</Button>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

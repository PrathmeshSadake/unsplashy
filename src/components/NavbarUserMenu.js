import {
  Divider,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const NavbarUserMenu = ({
  settingsList,
  anchorElUser,
  handleCloseUserMenu,
  handleLogout,
}) => {
  const theme = useTheme();
  const isAboveMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settingsList.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}

      {!isAboveMdScreen && <Divider />}
      {!isAboveMdScreen && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
    </Menu>
  );
};

export default NavbarUserMenu;

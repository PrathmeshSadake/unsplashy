import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useUserAuth } from "../context/UserAuthContext";

export default function NavbarDrawer({
  pagesList,
  isDrawerOpen,
  toggleDrawer,
}) {
  const { user } = useUserAuth();

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
        <Stack spacing={1} sx={{ marginTop: "1rem", alignItems: "center" }}>
          <Avatar alt="John Doe" />
          <Typography variant="subtitle2" component="span">
            {user && user.email}
          </Typography>
        </Stack>

        <Divider sx={{ marginTop: "1rem" }} />

        <List>
          {pagesList.map((page) => (
            <ListItem button key={page}>
              <Typography
                sx={{ textTransform: "uppercase", fontSize: "0.9rem" }}
              >
                {page}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

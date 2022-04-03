import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Avatar from "@mui/material/Avatar";
import {
    ClickAwayListener, Divider,
    Grow,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Typography,
} from "@mui/material";
import {useUserAuth} from "../context/UserAuthContext";
import {useNavigate} from "react-router-dom";

export default function MenuButton({ setDashboardPage }) {

    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleLogout = async () => {
        try {
            await logOut();
            localStorage.removeItem("accessToken");
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleCloseMenu = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event?.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Avatar onClick={handleToggle} ref={anchorRef}>
                K
            </Avatar>
            <Popper
                anchorEl={anchorRef.current}
                disablePortal
                open={open}
                placement={"bottom-end"}
                role={undefined}
                transition
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "top" ? "center top" : "center top",
                        }}
                    >
                        <Paper sx={{ p: 0.5 }} onClick={handleCloseMenu}>
                            <ClickAwayListener onClickAway={handleCloseMenu}>
                                <MenuList autoFocusItem={open}>
                                    <MenuItem
                                    >
                                        <AccountCircleIcon />
                                        <Box mr={1.5} />
                                        <Typography variant={"subtitle2"}>{"Profile"}</Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <AccountBalanceIcon />
                                        <Box mr={1.5} />
                                        <Typography variant={"subtitle2"}>{"Account"}</Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <DashboardIcon />
                                        <Box mr={1.5} />
                                        <Typography variant={"subtitle2"}>{"Dashboard"}</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <ExitToAppIcon />
                                        <Box mr={1.5} />
                                        <Typography variant={"subtitle2"}>{"Logout"}</Typography>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
}

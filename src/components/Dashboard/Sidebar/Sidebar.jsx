import * as React from 'react';
import "../index.css"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FaBoxOpen } from "react-icons/fa6";
import { TbChartCandle } from "react-icons/tb";
import { LiaFileContractSolid } from "react-icons/lia";
import { GoPackage } from "react-icons/go";
import { GrHome } from "react-icons/gr";
import { RiDashboard2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import logo from "../../../assets/banners/navlogo.png"
import { Divider } from '@mui/material';


const drawerWidth = 130;
export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));




const Sidebar = () => {


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: "#00092A" }} >
                <Toolbar className='toolbar' sx={{ height: "40px" }} >

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img className='nav-img' src={logo} alt="logo" />
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: { xs: drawerWidth, sm: 200 },
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: { xs: drawerWidth, sm: 200 },
                        boxSizing: 'border-box',
                        marginTop: { xs: "56px", md: "64px" }
                    },
                }}
                variant="temporary"
                anchor="left"
                open={open}
            >

                <Box className="mobile-nav-elements">
                    <IconButton sx={{ backgroundColor: "white", marginLeft: "40%", marginTop: "20px" }} onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>

                    <ul className="mt-4">
                        <li><NavLink to={"/#home"}><GrHome className="mb-1" /> Home Page</NavLink></li>
                        <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                        <li><NavLink to={"/dashboard"}><GrHome className="mb-1" /> Dashboard</NavLink></li>
                        <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                        <li><NavLink to={"/dashboard/office"}><GoPackage /> Office</NavLink></li>
                        <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                        <li><NavLink to={"/dashboard/topup"}><RiDashboard2Line /> Topup</NavLink></li>
                        <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                        <li><NavLink to={"/dashboard/broker"}><TbChartCandle /> Broker</NavLink></li>
                        <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                        <li><NavLink to={"/dashboard/plan"}><FaBoxOpen /> Plan</NavLink></li>
                        <Divider sx={{ backgroundColor: "gray", marginRight: "30px" }} />
                        <li><a href="#contract"><LiaFileContractSolid /> Contract</a></li>
                    </ul>
                </Box>
            </Drawer>
        </Box >
    )
}
export default Sidebar;
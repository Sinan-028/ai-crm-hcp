import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ChatIcon from "@mui/icons-material/Chat";
import InsightsIcon from "@mui/icons-material/Insights";
import SettingsIcon from "@mui/icons-material/Settings";

import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 260;

const menu = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    text: "Log Interaction",
    icon: <ChatIcon />,
    path: "/interaction",
  },
  {
    text: "HCP Directory",
    icon: <LocalHospitalIcon />,
    path: "/hcp",
  },
  {
    text: "AI Insights",
    icon: <InsightsIcon />,
    path: "/insights",
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
       <Box sx={{ mb: 4 }}>
  <Typography
    variant="h5"
    fontWeight={800}
    color="primary"
  >
    AI CRM HCP
  </Typography>

  <Typography
    variant="caption"
    color="text.secondary"
  >
    Enterprise Edition
  </Typography>
</Box>
      </Toolbar>

      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item.text}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
import { Box, Toolbar } from "@mui/material";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Sidebar />

      <Topbar />

      <Box
        sx={{
          ml: "260px",
          p: 4,
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </>
  );
}
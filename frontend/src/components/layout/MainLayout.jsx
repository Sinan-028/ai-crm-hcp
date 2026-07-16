import { Box, Toolbar } from "@mui/material";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Sidebar />

      <Topbar />

      <Box
  component="main"
  sx={{
    ml: "260px",
    minHeight: "100vh",
    backgroundColor: "#F8FAFC",
    p: 4,
  }}
>
  <Toolbar />

  {children}
</Box>
    </>
  );
}
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

export default function Topbar() {
  return (
    <AppBar
      elevation={0}
      color="inherit"
      position="fixed"
      sx={{
        ml: "260px",
        width: "calc(100% - 260px)",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ flexGrow: 1 }}
        >
          AI CRM Healthcare Professional
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <Typography>
            Mohammad Sinan
          </Typography>

          <Avatar>M</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
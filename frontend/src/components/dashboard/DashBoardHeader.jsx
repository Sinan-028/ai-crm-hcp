import {
  Box,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function DashboardHeader() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight={700}
        >
          {greeting}, Mohammad 👋
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Welcome back to AI CRM HCP Dashboard.
          Manage interactions and generate AI-powered insights.
        </Typography>
      </Box>

      <Stack direction="row" spacing={2}>
        <Chip
          icon={<SmartToyIcon />}
          label="AI Connected"
          color="success"
        />
      </Stack>
    </Box>
  );
}
import {
  Typography,
  Paper,
} from "@mui/material";

import MainLayout from "../components/layout/MainLayout";

export default function DashboardPage() {
  return (
    <MainLayout>
      <Typography
        variant="h4"
        fontWeight={700}
      >
        Dashboard
      </Typography>

      <Paper
        sx={{
          mt: 3,
          p: 4,
          borderRadius: 3,
        }}
      >
        Welcome to AI CRM
      </Paper>
    </MainLayout>
  );
}
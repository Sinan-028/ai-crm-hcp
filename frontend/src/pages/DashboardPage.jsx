import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import MainLayout from "../components/layout/MainLayout";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import RecentInteractions from "../components/dashboard/RecentInteractions";
import AIAssistantCard from "../components/dashboard/AIAssistantCard";
import QuickActions from "../components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <MainLayout>
      <DashboardHeader />

      <Box sx={{ mt: 4 }}>
        <StatsGrid />
      </Box>

      <Grid
        container
        spacing={3}
        sx={{ mt: 1 }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <RecentInteractions />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AIAssistantCard />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <QuickActions />
      </Box>
    </MainLayout>
  );
}
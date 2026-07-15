import { Grid, Typography } from "@mui/material";

import MainLayout from "../components/layout/MainLayout";
import InteractionForm from "../components/forms/InteractionForm";
import AIAssistant from "../components/chat/AIAssistant";

export default function LogInteractionPage() {
  return (
    <MainLayout>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
      >
        Log Interaction
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InteractionForm />
        </Grid>

        <Grid item xs={12} md={6}>
          <AIAssistant />
        </Grid>
      </Grid>
    </MainLayout>
  );
}
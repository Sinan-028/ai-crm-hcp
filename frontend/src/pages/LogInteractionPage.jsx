import {
  Grid,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

import MainLayout from "../components/layout/MainLayout";
import InteractionForm from "../components/forms/InteractionForm";
import AIAssistant from "../components/chat/AIAssistant";

export default function LogInteractionPage() {
  return (
    <MainLayout>
      <Typography variant="h4" fontWeight={700} mb={1}>
        Log Healthcare Professional Interaction
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Record interaction details and generate AI-powered insights.
      </Typography>

      <Grid
        container
        spacing={3}
        alignItems="flex-start"
      >
        <Grid item xs={12} lg={8}>
          <InteractionForm />
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              position: "sticky",
              top: 90,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
            >
              AI Assistant
            </Typography>

            <Divider sx={{ my: 2 }} />

            <AIAssistant />
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
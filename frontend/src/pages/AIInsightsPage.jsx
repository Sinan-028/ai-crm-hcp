import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";

export default function AIInsightsPage() {
  const [question, setQuestion] = useState(
    "Summarize this interaction and recommend the next best action."
  );

  const [response] = useState(`
Interaction Summary

Dr. Sarah Wilson showed interest in the newly introduced diabetes medication.
The discussion focused on clinical efficacy, dosage recommendations, and patient eligibility.

Next Best Action

• Schedule a follow-up meeting within one week.
• Share additional clinical trial reports.
• Provide product samples for evaluation.
`);

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        AI Insights
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Ask the AI assistant to analyze healthcare professional interactions.
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={3}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <Button
        sx={{ mt: 2, mb: 3 }}
        variant="contained"
      >
        Generate AI Insights
      </Button>

      <Paper sx={{ p: 3 }}>
        <Typography whiteSpace="pre-line">
          {response}
        </Typography>
      </Paper>
    </Box>
  );
}
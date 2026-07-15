import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

export default function AIAssistant() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, height: "100%" }}>
      <Typography variant="h6" fontWeight={700}>
        AI Assistant
      </Typography>

      <Typography
        color="text.secondary"
        mt={2}
      >
        Describe your interaction naturally.
      </Typography>

      <TextField
        multiline
        rows={10}
        fullWidth
        sx={{ mt: 2 }}
        placeholder="Today I met Dr. Sharma..."
      />

      <Box mt={2}>
        <Button variant="contained">
          Generate Summary
        </Button>
      </Box>
    </Paper>
  );
}
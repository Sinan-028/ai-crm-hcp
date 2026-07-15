import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

export default function InteractionForm() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Structured Interaction Form
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="HCP Name" fullWidth />

        <TextField label="Hospital" fullWidth />

        <TextField select label="Meeting Type" fullWidth>
          <MenuItem value="Visit">Visit</MenuItem>
          <MenuItem value="Call">Call</MenuItem>
          <MenuItem value="Conference">Conference</MenuItem>
        </TextField>

        <TextField
          label="Products Discussed"
          fullWidth
        />

        <TextField
          multiline
          rows={5}
          label="Interaction Notes"
          fullWidth
        />

        <Button
          variant="contained"
          size="large"
        >
          Save Interaction
        </Button>
      </Box>
    </Paper>
  );
}
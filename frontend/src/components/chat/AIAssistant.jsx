import {
  Typography,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function AIAssistant() {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2 }}
      >
        Describe the interaction naturally. AI will generate a concise
        summary, analyze the doctor's sentiment, and recommend the next
        best action.
      </Typography>

      <Alert
        severity="info"
        sx={{ mb: 2 }}
      >
        Example:
        <br />
        "Met Dr. Sarah Wilson to discuss DiaCare Plus. The doctor showed
        interest and requested additional clinical evidence."
      </Alert>

      <TextField
        label="Interaction Description"
        multiline
        rows={10}
        fullWidth
        placeholder="Describe the interaction here..."
        sx={{ mb: 2 }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          startIcon={<AutoAwesomeIcon />}
          size="large"
        >
          Generate AI Summary
        </Button>
      </Box>
    </>
  );
}
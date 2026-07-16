import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

export default function InteractionForm() {
  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        mb={3}
      >
        Log HCP Interaction
      </Typography>

      <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
          <TextField
            label="HCP Name"
            fullWidth
            placeholder="Search or select HCP"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            label="Interaction Type"
            fullWidth
            defaultValue="Meeting"
          >
            <MenuItem value="Meeting">Meeting</MenuItem>
            <MenuItem value="Call">Call</MenuItem>
            <MenuItem value="Conference">Conference</MenuItem>
            <MenuItem value="Product Demo">Product Demo</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            type="date"
            label="Date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            type="time"
            label="Time"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Attendees"
            fullWidth
            placeholder="Names of attendees"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            multiline
            rows={4}
            label="Topics Discussed"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Materials Shared"
            fullWidth
            placeholder="Presentation, brochure..."
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Samples Distributed"
            fullWidth
            placeholder="Sample details"
          />
        </Grid>

        <Grid item xs={12}>
          <FormLabel>Observed / Inferred HCP Sentiment</FormLabel>

          <RadioGroup row defaultValue="Positive">
            <FormControlLabel
              value="Positive"
              control={<Radio />}
              label="Positive"
            />

            <FormControlLabel
              value="Neutral"
              control={<Radio />}
              label="Neutral"
            />

            <FormControlLabel
              value="Negative"
              control={<Radio />}
              label="Negative"
            />
          </RadioGroup>
        </Grid>

        <Grid item xs={12}>
          <TextField
            multiline
            rows={3}
            label="Outcomes"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            multiline
            rows={3}
            label="Follow-up Actions"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              bgcolor: "#F8FAFC",
            }}
          >
            <Typography
              fontWeight={700}
              gutterBottom
            >
              🤖 AI Suggested Follow-up
            </Typography>

            <Typography variant="body2">
              • Schedule follow-up meeting in one week
            </Typography>

            <Typography variant="body2">
              • Share latest clinical evidence
            </Typography>

            <Typography variant="body2">
              • Send product brochure
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            size="large"
          >
            Save Interaction
          </Button>
        </Grid>

      </Grid>
    </Paper>
  );
}
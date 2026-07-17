import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function InteractionForm() {
  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight={700}>
        Healthcare Professional Interaction
      </Typography>

      <Typography color="text.secondary" mb={3}>
        Record meeting details for future reference and AI analysis.
      </Typography>

      {/* Healthcare Professional */}
      <Typography variant="h6" mb={2}>
        Healthcare Professional
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            select
            label="HCP Name"
            fullWidth
            defaultValue="Dr. Sarah Wilson"
          >
            <MenuItem value="Dr. Sarah Wilson">
              Dr. Sarah Wilson
            </MenuItem>

            <MenuItem value="Dr. John Smith">
              Dr. John Smith
            </MenuItem>

            <MenuItem value="Dr. Emily Davis">
              Dr. Emily Davis
            </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Specialty"
            fullWidth
            defaultValue="Cardiologist"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Hospital"
            fullWidth
            defaultValue="Apollo Hospital"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="City"
            fullWidth
            defaultValue="Bangalore"
          />
        </Grid>

        {/* Meeting Details */}

        <Grid item xs={12}>
          <Typography variant="h6" mt={2}>
            Meeting Details
          </Typography>

          <Divider sx={{ mt: 1, mb: 2 }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            label="Interaction Type"
            fullWidth
            defaultValue="Doctor Visit"
          >
            <MenuItem value="Doctor Visit">Doctor Visit</MenuItem>
            <MenuItem value="Phone Call">Phone Call</MenuItem>
            <MenuItem value="Conference">Conference</MenuItem>
            <MenuItem value="Product Presentation">
              Product Presentation
            </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            label="Meeting Mode"
            fullWidth
            defaultValue="In Person"
          >
            <MenuItem value="In Person">In Person</MenuItem>
            <MenuItem value="Online">Online</MenuItem>
            <MenuItem value="Phone">Phone</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            type="date"
            fullWidth
            label="Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            type="time"
            fullWidth
            label="Time"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            select
            fullWidth
            label="Duration"
            defaultValue="30 Minutes"
          >
            <MenuItem value="15 Minutes">15 Minutes</MenuItem>
            <MenuItem value="30 Minutes">30 Minutes</MenuItem>
            <MenuItem value="45 Minutes">45 Minutes</MenuItem>
            <MenuItem value="60 Minutes">60 Minutes</MenuItem>
          </TextField>
        </Grid>

        {/* Discussion */}

        <Grid item xs={12}>
          <Typography variant="h6" mt={2}>
            Discussion Summary
          </Typography>

          <Divider sx={{ mt: 1, mb: 2 }} />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Products Discussed"
            fullWidth
            defaultValue="DiaCare Plus"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            multiline
            rows={4}
            label="Topics Discussed"
            placeholder="Clinical efficacy, dosage guidelines, patient eligibility..."
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Materials Shared"
            fullWidth
            placeholder="Product brochure, clinical trial report..."
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Samples Distributed"
            fullWidth
            placeholder="10 Sample Packs"
          />
        </Grid>

        <Grid item xs={12}>
          <FormLabel>Doctor Sentiment</FormLabel>

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
            label="Doctor Feedback / Outcomes"
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

        {/* AI Suggestions */}

        <Grid item xs={12}>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              bgcolor: "#F8FAFC",
            }}
          >
            <Typography variant="h6" gutterBottom>
              🤖 AI Suggested Next Best Action
            </Typography>

            <Typography>
              ✓ Schedule a follow-up visit within one week.
            </Typography>

            <Typography>
              ✓ Share additional clinical evidence.
            </Typography>

            <Typography>
              ✓ Send updated product brochure.
            </Typography>

            <Typography>
              ✓ Provide additional sample packs.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
          >
            <Button variant="outlined">
              Reset
            </Button>

            <Button
              variant="contained"
              size="large"
            >
              Save Interaction
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
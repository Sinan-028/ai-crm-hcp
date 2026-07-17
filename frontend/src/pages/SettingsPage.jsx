import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SettingsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        <SettingsIcon sx={{ mr: 1, verticalAlign: "middle" }} />
        Settings
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Manage application information and system status.
      </Typography>

      <Grid container spacing={3}>
        {/* User Information */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              User Information
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography>
              <strong>Name:</strong> Mohammad Sinan
            </Typography>

            <Typography sx={{ mt: 1 }}>
              <strong>Role:</strong> Sales Representative
            </Typography>

            <Typography sx={{ mt: 1 }}>
              <strong>Organization:</strong> AI CRM HCP
            </Typography>
          </Paper>
        </Grid>

        {/* System Status */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              System Status
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Chip
              icon={<CheckCircleIcon />}
              label="Backend Connected"
              color="success"
              sx={{ mb: 1 }}
            />

            <br />

            <Chip
              icon={<CheckCircleIcon />}
              label="PostgreSQL Connected"
              color="success"
              sx={{ mb: 1 }}
            />

            <br />

            <Chip
              icon={<CheckCircleIcon />}
              label="AI Service Ready"
              color="success"
            />
          </Paper>
        </Grid>

        {/* Technologies */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Technologies Used
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography>• React + Vite</Typography>
            <Typography>• Material UI</Typography>
            <Typography>• FastAPI</Typography>
            <Typography>• PostgreSQL</Typography>
            <Typography>• SQLAlchemy</Typography>
            <Typography>• LangGraph</Typography>
            <Typography>• Groq LLM</Typography>
          </Paper>
        </Grid>

        {/* Future Improvements */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Future Enhancements
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography>
              • User Authentication & Authorization
            </Typography>

            <Typography>
              • Role-Based Access Control
            </Typography>

            <Typography>
              • Email & Push Notifications
            </Typography>

            <Typography>
              • Analytics Dashboard
            </Typography>

            <Typography>
              • Multi-Agent AI Workflow using LangGraph
            </Typography>

            <Typography>
              • AI Conversation History
            </Typography>
          </Paper>
        </Grid>

        {/* Version */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">
              Application Version
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography>
              AI CRM for Healthcare Professionals
            </Typography>

            <Typography>Version: 1.0</Typography>

            <Typography>Developed by Mohammad Sinan</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ForumIcon from "@mui/icons-material/Forum";

import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid #E5E7EB",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={700}
          mb={3}
        >
          ⚡ Quick Actions
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          <Button
            fullWidth
            variant="contained"
            size="large"
            startIcon={<ForumIcon />}
            onClick={() => navigate("/interaction")}
          >
            Log Interaction
          </Button>

          <Button
            fullWidth
            variant="outlined"
            size="large"
            startIcon={<AddIcon />}
            onClick={() => navigate("/hcp")}
          >
            Add HCP
          </Button>

          <Button
            fullWidth
            variant="outlined"
            size="large"
            color="secondary"
            startIcon={<PsychologyIcon />}
            onClick={() => navigate("/")}
          >
            AI Assistant
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
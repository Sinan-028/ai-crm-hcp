import { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";

import { askAI } from "../../services/aiService";

export default function AIAssistantCard() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAskAI() {
    if (!query.trim()) return;

    try {
      setLoading(true);

      const result = await askAI(2, query);

      setResponse(result);
    } catch (err) {
      console.error(err);
      setResponse("Unable to get AI response.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight={700}
          mb={3}
        >
          🤖 AI CRM Assistant
        </Typography>

        <Stack spacing={3}>

          <TextField
            multiline
            rows={3}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about this interaction..."
            fullWidth
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleAskAI}
            disabled={loading}
        >
            {loading ? (
              <CircularProgress
                size={24}
                color="inherit"
              />
            ) : (
              "✨ Generate AI Insight"
            )}
          </Button>

          {query && (
            <Box>
              <Divider sx={{ mb: 2 }} />

              <Stack
                direction="row"
                spacing={2}
                alignItems="flex-start"
              >
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <PersonIcon />
                </Avatar>

                <Box>
                  <Typography
                    fontWeight={700}
                    mb={0.5}
                  >
                    You
                  </Typography>

                  <Typography>
                    {query}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          )}

          {response && (
            <Box>
              <Divider sx={{ my: 2 }} />

              <Stack
                direction="row"
                spacing={2}
                alignItems="flex-start"
              >
                <Avatar sx={{ bgcolor: "#10B981" }}>
                  <SmartToyIcon />
                </Avatar>

                <Box>
                  <Typography
                    fontWeight={700}
                    mb={1}
                  >
                    AI Assistant
                  </Typography>

                  <Typography
                    sx={{
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {response}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          )}

        </Stack>

      </CardContent>
    </Card>
  );
}
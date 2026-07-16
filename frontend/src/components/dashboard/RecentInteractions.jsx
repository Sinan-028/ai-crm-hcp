import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Chip,
  CircularProgress,
} from "@mui/material";

import { getInteractions } from "../../services/dashboardService";

export default function RecentInteractions() {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getInteractions();
        setInteractions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <Card elevation={0} sx={{ borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6" fontWeight={700} mb={3}>
          Recent Interactions
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : (
          <Stack spacing={2}>
            {interactions.map((item, index) => (
              <div key={item.id}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <div>
                    <Typography fontWeight={600}>
                      {item.interaction_type}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.summary.length > 70
                        ? item.summary.substring(0, 70) + "..."
                        : item.summary}
                    </Typography>
                  </div>

                  <Chip
                    label={item.sentiment}
                    color={
                      item.sentiment === "Positive"
                        ? "success"
                        : "warning"
                    }
                  />
                </Stack>

                {index !== interactions.length - 1 && (
                  <Divider sx={{ mt: 2 }} />
                )}
              </div>
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
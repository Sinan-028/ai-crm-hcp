import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import MainLayout from "../components/layout/MainLayout";
import HCPCard from "../components/hcp/HCPCard";

import { getHCPs } from "../services/dashboardService";

export default function HCPPage() {
  const [hcps, setHcps] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      const data = await getHCPs();
      setHcps(data);
    }

    load();
  }, []);

  const filtered = hcps.filter((hcp) =>
    hcp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Healthcare Professionals
          </Typography>

          <Typography color="text.secondary">
            Manage your HCP network
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add HCP
        </Button>
      </Stack>

      <TextField
        fullWidth
        placeholder="Search doctor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3}>
        {filtered.map((hcp) => (
          <Grid
            key={hcp.id}
            size={{ xs: 12, md: 6, lg: 4 }}
          >
            <HCPCard hcp={hcp} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
}
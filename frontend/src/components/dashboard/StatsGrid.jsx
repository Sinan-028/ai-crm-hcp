import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import SmartToyIcon from "@mui/icons-material/SmartToy";

import StatCard from "./StatCard";

import {
  getHCPs,
  getUsers,
  getInteractions,
} from "../../services/dashboardService";

export default function StatsGrid() {
  const [stats, setStats] = useState({
    hcps: 0,
    users: 0,
    interactions: 0,
  });

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [hcps, users, interactions] = await Promise.all([
          getHCPs(),
          getUsers(),
          getInteractions(),
        ]);

        setStats({
          hcps: hcps.length,
          users: users.length,
          interactions: interactions.length,
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadDashboard();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatCard
          title="Total HCPs"
          value={stats.hcps}
          icon={<PeopleAltIcon color="primary" sx={{ fontSize: 42 }} />}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatCard
          title="Users"
          value={stats.users}
          icon={<PersonIcon color="secondary" sx={{ fontSize: 42 }} />}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatCard
          title="Interactions"
          value={stats.interactions}
          icon={<ForumIcon color="success" sx={{ fontSize: 42 }} />}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatCard
          title="AI Status"
          value="Ready"
          icon={<SmartToyIcon color="warning" sx={{ fontSize: 42 }} />}
        />
      </Grid>
    </Grid>
  );
}
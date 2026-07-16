import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Avatar,
} from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

export default function HCPCard({ hcp }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid #E5E7EB",
        transition: ".25s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 56,
              height: 56,
            }}
          >
            <LocalHospitalIcon />
          </Avatar>

          <Stack spacing={1} flex={1}>
            <Typography
              variant="h6"
              fontWeight={700}
            >
              {hcp.name}
            </Typography>

            <Chip
              label={hcp.specialty}
              color="primary"
              sx={{ width: "fit-content" }}
            />

            <Typography color="text.secondary">
              🏥 {hcp.hospital}
            </Typography>

            <Typography color="text.secondary">
              📍 {hcp.city}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
import {
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

export default function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <Card
    elevation={0}
    sx={{
        borderRadius:4,
        border:"1px solid #E5E7EB",
        transition:".3s",

        background:
            "linear-gradient(135deg,#ffffff,#f8fbff)",

        "&:hover":{
            transform:"translateY(-6px)",
            boxShadow:"0 16px 40px rgba(37,99,235,.15)"
        }
    }}
>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              fontSize={14}
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight={700}
            >
              {value}
            </Typography>
          </Stack>

          {icon}
        </Stack>
      </CardContent>
    </Card>
  );
}
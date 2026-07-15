import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    primary: {
      main: "#2563EB",
    },
    secondary: {
      main: "#14B8A6",
    },
    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
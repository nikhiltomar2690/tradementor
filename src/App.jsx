import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function App() {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        backgroundColor: "black",
        padding: "2rem",
        marginTop: "2rem",
        color: "white",
      }}
    >
      Contained
      <ArrowForwardIcon color="white"></ArrowForwardIcon>
    </Button>
  );
}

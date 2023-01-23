import {
  Container,
  Tooltip,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { GitHub, Instagram, Email, LinkedIn } from "@mui/icons-material";
import { Stack } from "@mui/system";

interface Props {}

const HomeOverlay: React.FC<Props> = () => {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "absolute",
        top: 0,
      }}
      disableGutters
      maxWidth={false}
    >
      <AppBar
        color="transparent"
        position="relative"
        sx={{ top: 0, boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            children="KEI HARTLEY"
            color="#ffffff"
            variant="subtitle1"
          />
        </Toolbar>
      </AppBar>
      <AppBar
        color="transparent"
        position="relative"
        sx={{ bottom: 0, boxShadow: "none" }}
      >
        <Toolbar>
          <Container sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography children="WORK" color="#ffffff" variant="overline" />
            <Typography children="ABOUT" color="#ffffff" variant="overline" />
            <Typography children="CONTACT" color="#ffffff" variant="overline" />
          </Container>
          <Stack direction="row" spacing={2}>
            <Tooltip
              title="Github"
              arrow
              children={
                <IconButton color="secondary">
                  <GitHub />
                </IconButton>
              }
            />
            <Tooltip
              title="LinkedIn"
              arrow
              children={
                <IconButton color="secondary">
                  <LinkedIn />
                </IconButton>
              }
            />
            <Tooltip
              title="Email"
              arrow
              children={
                <IconButton color="secondary">
                  <Email />
                </IconButton>
              }
            />
            <Tooltip
              title="Instagram"
              arrow
              children={
                <IconButton color="secondary">
                  <Instagram />
                </IconButton>
              }
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default HomeOverlay;

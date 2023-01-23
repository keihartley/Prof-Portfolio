import {
  Container,
  Tooltip,
  IconButton,
  AppBar,
  Toolbar,
  Link,
  Divider,
} from "@mui/material";
import { GitHub, Instagram, Email, LinkedIn } from "@mui/icons-material";
import { Stack } from "@mui/system";

interface Props {
  noTopNav?: boolean;
}

const Overlay: React.FC<Props> = ({ noTopNav = false }) => {
  if (noTopNav) {
    return (
      <Container
        sx={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute",
          top: 0,
          padding: "1em",
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
            <Container
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              maxWidth={false}
            >
              <Link
                href="/"
                children="KEI HARTLEY"
                color="text.primary"
                underline="none"
                variant="h6"
                sx={{ pointerEvents: "all" }}
              />
              <Stack direction="row" spacing={2}>
                <Tooltip
                  title="Github"
                  arrow
                  sx={{ pointerEvents: "all" }}
                  children={
                    <IconButton color="secondary">
                      <GitHub />
                    </IconButton>
                  }
                />
                <Tooltip
                  title="LinkedIn"
                  arrow
                  sx={{ pointerEvents: "all" }}
                  children={
                    <IconButton color="secondary">
                      <LinkedIn />
                    </IconButton>
                  }
                />
                <Tooltip
                  title="Email"
                  arrow
                  sx={{ pointerEvents: "all" }}
                  children={
                    <IconButton color="secondary">
                      <Email />
                    </IconButton>
                  }
                />
                <Tooltip
                  title="Instagram"
                  arrow
                  sx={{ pointerEvents: "all" }}
                  children={
                    <IconButton color="secondary">
                      <Instagram />
                    </IconButton>
                  }
                />
                <Divider orientation="vertical" />
                <Tooltip
                  title="Instagram"
                  arrow
                  sx={{ pointerEvents: "all" }}
                  children={
                    <IconButton color="secondary">
                      <Instagram />
                    </IconButton>
                  }
                />
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "absolute",
        top: 0,
        padding: "1em",
      }}
      disableGutters
      maxWidth={false}
    >
      <AppBar
        color="transparent"
        position="sticky"
        sx={{ top: 0, boxShadow: "none" }}
      >
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            maxWidth={false}
          >
            <Link
              href="/"
              children="KEI HARTLEY"
              color="text.primary"
              underline="none"
              variant="h6"
              sx={{ pointerEvents: "all" }}
            />
            <Stack direction="row" spacing={2}>
              <Tooltip
                title="Github"
                arrow
                sx={{ pointerEvents: "all" }}
                children={
                  <IconButton color="secondary">
                    <GitHub />
                  </IconButton>
                }
              />
              <Tooltip
                title="LinkedIn"
                arrow
                sx={{ pointerEvents: "all" }}
                children={
                  <IconButton color="secondary">
                    <LinkedIn />
                  </IconButton>
                }
              />
              <Tooltip
                title="Email"
                arrow
                sx={{ pointerEvents: "all" }}
                children={
                  <IconButton color="secondary">
                    <Email />
                  </IconButton>
                }
              />
              <Tooltip
                title="Instagram"
                arrow
                sx={{ pointerEvents: "all" }}
                children={
                  <IconButton color="secondary">
                    <Instagram />
                  </IconButton>
                }
              />
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <AppBar
        color="transparent"
        position="relative"
        sx={{ bottom: 0, boxShadow: "none" }}
      >
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-around",
              maxWidth: "800px",
            }}
          >
            <Link
              href="/work"
              children="WORK"
              color="text.secondary"
              underline="hover"
              variant="subtitle1"
              sx={{ pointerEvents: "all" }}
            />
            <Link
              href="/about"
              children="ABOUT"
              color="text.secondary"
              underline="hover"
              variant="subtitle1"
              sx={{ pointerEvents: "all" }}
            />
            <Link
              href="/contact"
              children="CONTACT"
              color="text.secondary"
              underline="hover"
              variant="subtitle1"
              sx={{ pointerEvents: "all" }}
            />
          </Container>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Overlay;

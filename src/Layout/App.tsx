import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Sandbox from "./Pages/Sandbox";

interface Props {}

interface TempProps {
  content: string;
}

const TempPage: React.FC<TempProps> = ({ content }) => {
  return (
    <Container
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
        position: "absolute",
        top: 0,
        padding: "1em",
      }}
      disableGutters
      maxWidth={false}
    >
      <Typography
        align="center"
        color="text.primary"
        variant="h3"
        children={content}
      />
      <Button
        size="large"
        href='/'
        color="primary"
        children="Go Back"
        variant="contained"
        sx={{ maxWidth: 300 }}
      />
    </Container>
  );
};

const App: React.FC<Props> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Portfolio />} />
        <Route path="/about" element={<TempPage content="In Progress" />} />
        <Route path="/contact" element={<TempPage content="In Progress" />} />
        <Route path="/sandbox" element={<Sandbox />} />
      </Routes>
    </Router>
  );
};

export default App;

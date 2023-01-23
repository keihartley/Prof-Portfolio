import ReactDOM from "react-dom/client";
import "./Style/index.css";
import App from "./Layout/App";
import reportWebVitals from "./Other/reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Other/theme";
import { Leva } from "leva";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <Leva hidden />
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

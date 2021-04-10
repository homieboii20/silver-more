import "react-perfect-scrollbar/dist/css/styles.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "src/Components/GlobalStyles";
import "src/Mixins/chartjs";
import theme from "src/Theme";
import routes from "src/routes";
import AuthProvider from "./Providers/AuthProvider";
import APIErrorProvider from "./Providers/APIErrorProvider";

import ErrorAlert from "./Components/Alert";

const App = () => {
  const isAuthed = AuthProvider.checkAuth();
  const routing = useRoutes(routes(isAuthed));

  return (
    <ThemeProvider theme={theme}>
      <APIErrorProvider>
        <ErrorAlert />
        <GlobalStyles />
        {routing}
      </APIErrorProvider>
    </ThemeProvider>
  );
};

export default App;

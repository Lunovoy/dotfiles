import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import { render } from "@testing-library/react";

const App() => {
  {
    this.state = {isSidebar : true};
    // const [isSidebar, setIsSidebar] = useState(true);
    // const [theme, colorMode] = useMode();
    // this.state = {theme, useMode};
  return (
    <ColorModeContext.Provider value={"dark"}>
      {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={"true"} />
          <main className="content">
            <Topbar setIsSidebar={"true"} />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/team" element={<Team />} />
              {/* <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      {/* </ThemeProvider> */}
    </ColorModeContext.Provider>
  );
  }
}

export default App;

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import "./App.css";
import Dashboard from "./scenes/Dashboard";
import Layout from "./scenes/Layout";
import Products from "./scenes/Products";
import Customers from "./scenes/Customers";
import Transactions from "./scenes/Transactions";
import Geography from "./scenes/Geography";
import Overview from "./scenes/Overview";
import Daily from "./scenes/Daily";
import Monthly from "./scenes/Monthly";
import Breakdown from "./scenes/Breakdown";
import Admin from "./scenes/Admin";
import Performance from "./scenes/Performance";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline></CssBaseline>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/customers" element={<Customers />}></Route>
              <Route path="/transactions" element={<Transactions />}></Route>
              <Route path="/geography" element={<Geography />}></Route>
              <Route path="/overview" element={<Overview />}></Route>
              <Route path="/daily" element={<Daily />}></Route>
              <Route path="/monthly" element={<Monthly />}></Route>
              <Route path="/breakdown" element={<Breakdown />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="/performance" element={<Performance />}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

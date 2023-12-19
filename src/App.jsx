import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainPage from "./components/Main/MainPage";
import Header from './components/Header'
export default function App() {
  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return null;
  };
  const theme = createTheme({
    typography: {
      fontFamily: "",
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <Header/>
          <Routes>
            <Route index element={<MainPage/>} />
           
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}


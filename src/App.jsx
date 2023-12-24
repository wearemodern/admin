import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainPage from "./components/Main/MainPage";
import Header from './components/header/Header'
import AllCategories from "./components/header/AllCategories";
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
    <div className="bg-white w-100 h-100">
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <ScrollToTop />
          <Header/>
          <Routes className="bg-white">
            <Route index element={<MainPage/>} />
            <Route path="/categories" element={<AllCategories/>} />
           
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}


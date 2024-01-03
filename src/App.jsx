import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SideButtons from "./components/SideButtons";
import MainPage from "./components/Main/MainPage";
import Header from "./components/header/Header";
import AllCategories from "./components/header/AllCategories";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/footer/Footer";
import Store from "./components/store/Store";
export default function App() {
 
  const theme = createTheme({
    typography: {
      fontFamily: "",
    },
  });

  return (
    <div className="bg-white w-100 h-100">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
            <SideButtons />
          <Routes className="bg-white">
            <Route index element={<MainPage />} />
            <Route path="/categories" element={<AllCategories />} />
            <Route path="/store" element={<Store />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

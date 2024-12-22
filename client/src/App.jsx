import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import themeConfigs from "./configs/theme.configs";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import routes from "./routes/routes";
import PageWrapper from "./components/common/PageWrapper";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ResetPassword from "./pages/ResetPassword";

function App() {
  const { themeMode } = useSelector((state) => state.themeMode);
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme={themeMode}
      />
      <CssBaseline />
      {/* App Routes*/}
      <BrowserRouter>
        <Routes>
          {/* ResetPassword route outside of MainLayout */}
          <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
          
          {/* MainLayout and other routes */}
          <Route element={<MainLayout />}>
            {routes.map((route, index) =>
              route.index ? (
                <Route
                  index
                  key={index}
                  element={
                    route.state ? (
                      <PageWrapper state={route.state}>
                        {route.element}
                      </PageWrapper>
                    ) : (
                      route.element
                    )
                  }
                />
              ) : (
                <Route
                  path={route.path}
                  key={index}
                  element={
                    route.state ? (
                      <PageWrapper state={route.state}>
                        {route.element}
                      </PageWrapper>
                    ) : (
                      route.element
                    )
                  }
                />
              )
            )}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* App Routes*/}
    </ThemeProvider>
  );
}

export default App;
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import AboutUs from "./components/pages/AboutUs";
import Features from "./components/pages/Features";
import HowItWorks from "./components/pages/HowItWorks";
import Services from "./components/pages/Services";
import Blog from "./components/pages/Blog";
import Help from "./components/pages/Help";
import Signup from "./components/pages/Signup";
import Donate from "./components/pages/Donate";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/system";
import customTheme from "./themes/customTheme";
import Register from "./components/pages/loginSignup/Register";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Login from "./components/pages/loginSignup/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/pages/dashboard/Dashboard";
import AddQuestions from "./components/pages/dashboard/AddQuestions";
import DashboardHome from "./components/pages/dashboard/DashboardHome";

function App() {
  const excludedRoutes = ["/register", "/", "/dashboard"];
  return (
    <ThemeProvider theme={customTheme}>
      <Container disableGutters maxWidth={false}>
        <BrowserRouter>
          {!excludedRoutes.includes(window.location.pathname) && <Navbar />}
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="features" element={<Features />} />
              <Route path="services" element={<Services />} />
              <Route path="howitworks" element={<HowItWorks />} />
              <Route path="blog" element={<Blog />} />
              <Route path="help" element={<Help />} />
              <Route path="signup" element={<Signup />} />
              <Route path="donate" element={<Donate />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="dashboard" element={<Dashboard />}>
                <Route index element={<DashboardHome />} />
                <Route path="add" element={<AddQuestions />} />
              </Route>
            </Routes>
          </UserAuthContextProvider>
          {/* <Footer /> */}
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

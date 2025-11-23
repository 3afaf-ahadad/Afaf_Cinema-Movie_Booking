import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Cinemas from "./pages/Cinemas.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Movie from "./pages/Movie.jsx";
import Seats from "./pages/Seat.jsx";
import Payment from "./pages/Payment.jsx";
import "./styles/index.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="/cinemas" element={<Cinemas />} />
              <Route path="/seats" element={<Seats />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

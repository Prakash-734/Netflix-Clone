import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authChecked, setAuthChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        if (location.pathname === '/login') {
          navigate('/');
        }
      } else {
        setIsLoggedIn(false);
        if (location.pathname !== '/login') {
          navigate('/login');
        }
      }
      setAuthChecked(true); // Now auth is known
    });

    return () => unsubscribe();
  }, [navigate, location]);

  if (!authChecked) {
    return (
      <div className="flex justify-center items-center h-screen text-white bg-black">
        <p>Checking authentication...</p>
      </div>
    );
  }

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={isLoggedIn ? <Player /> : <Login />} />
      </Routes>
    </div>
  );
};

export default App;

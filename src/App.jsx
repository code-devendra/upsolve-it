import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFirebase } from "./context/Firebase";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
function App() {
  const [auth, setAuth] = useState(false);
  const firebase = useFirebase();
  useEffect(() => {
    firebase.isLoggedIn ? setAuth(true) : setAuth(false);
  });
  return (
    <>
      <Navbar auth={auth} />
      <SignIn />
      <Toaster />
      <Routes>
        <Route index element={<Home auth={auth} />} />
        <Route path="*" element={<Home auth={auth} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

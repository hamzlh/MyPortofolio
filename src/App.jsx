import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomeePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import NavbarComponent from "./components/NavbarComponent.jsx";
import { useState, useEffect } from "react";
import ModalComponent from "./components/ModalComponent.jsx";

function App() {
  const location = useLocation().pathname;
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('userName'); // Remove 'userName' from local storage
      localStorage.removeItem('isLoggedIn'); // Remove 'userName' from local storage
      
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      setShow(false)
    }
  },[])
  const handleShowChange = (val) => {
    setShow(val);
  };
  return (
    <div>
      {show ? <ModalComponent onShowChange={handleShowChange} /> : (
        <div>
          <NavbarComponent linkParam={location}></NavbarComponent>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/project" Component={ProjectPage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/work" Component={WorkPage} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;

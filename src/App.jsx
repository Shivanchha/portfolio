import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./components/Education";
import { chosenTheme } from "./theme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 'component' is now 'element' and takes JSX <Component /> */}
        <Route path="/home" element={<Home theme={chosenTheme} />} />
        <Route path="/education" element={<Education theme={chosenTheme} />} />
        
        {/* Redirect: If user goes to "/", send them to "/home" */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Catch-all: Redirect unknown URLs to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
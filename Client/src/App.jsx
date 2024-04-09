import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Loginpage from "./Components/Loginpage";
import Registerpage from "./Components/Registerpage";
import Notfound from "./Components/Notfound";
import CreateJobpage from "./Components/CreateJobpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/create-job" element={<CreateJobpage />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
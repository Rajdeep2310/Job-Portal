import {BrowserRouter , Routes , Route} from "react-router-dom";
import Loginpages from "./Pages/Loginpages";
import Registerpage from "./Pages/Registerpage";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpages/>}/>
        <Route path="/register" element={<Registerpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
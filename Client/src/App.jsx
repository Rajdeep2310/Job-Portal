import {BrowserRouter , Routes , Route} from "react-router-dom";
import Loginpages from "./Pages/Loginpages";
import Registerpage from "./Pages/Registerpage";
import Homepage from "./Pages/Homepage"
import Jobdetailspage from "./Pages/Jobdetailspage";
import Jobpostpage from "./Pages/jobpostpage";
const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Loginpages/>}/>
        <Route path="/register" element={<Registerpage/>}/>
        <Route path="/job-details/:id" element={<Jobdetailspage/>} />
        <Route path="/job-post" element={<Jobpostpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
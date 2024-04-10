import Login from '../Components/Login';
import coverPage from "../Asset/image 466.png";
const Loginpages = () => {
  return (
    
    <div style={{ display: "flex" }}>
    <Login/>
    <img
        src={coverPage}
        style={{ maxHeight: "100vh", width: "50vw" }}
        alt="Login cover"
    />
</div>
  )
}

export default Loginpages;
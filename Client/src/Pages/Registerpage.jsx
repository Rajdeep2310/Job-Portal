import Register from "../Components/Register";
import coverPage from "../Asset/image 466.png";
const Registerpage = ( ) => {
    return(
        <div style={{ display: "flex" }}>
            <Register />
            <img
                src={coverPage}
                style={{ maxHeight: "100vh", width: "50vw" }}
                alt="Login cover"
            />
        </div>
    )
}

export default Registerpage;
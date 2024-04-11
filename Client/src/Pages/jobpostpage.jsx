import Jobpost from "../Components/Jobpost"
import jobImage from "../Asset/WallpaperDog-20567151 1.png"

const Jobpostpage = () =>{
    return(
        <div style={{ display: "flex" }}>
        <Jobpost />
        <img style={{ maxHeight: "100vh", width: "50vw" }} src={jobImage} />
    </div>
    )
}

export default Jobpostpage;
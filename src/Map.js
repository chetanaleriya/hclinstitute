import { Link } from "react-router-dom"
import map from "./map.jpg"
import "./map.css"
function Map()
{
    return(
        <div className="map">
             <Link to="https://maps.app.goo.gl/fj1rVLnQ2YMmGA4D6"><img src={map} width="100%" height={400}></img></Link>
        </div>
    )
}
export default Map
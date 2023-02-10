import "./Profile.css"
import profilePic from "../.././assets/innebandysquare.jpg"

export const Profile = () => {
    return (<>
        <div className="profileContainer">
            <h3>Min profil</h3>
            <div className="myProfile">
                <img src={profilePic}/>
                <h3>Hektor Byfors</h3>
            </div>

            <div className="myProfileCard">
                <h3>Kontakt</h3>
                <h4><span>Telefon:</span> 070 818 21 49</h4>
                <h4><span>E-post:</span> Hektor.Byfors@hotmail.com</h4>
            </div>
        </div>
    </>)
}
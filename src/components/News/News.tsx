import "./News.css"
import profilePicPlaceholder from "../.././assets/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"

export const News = () => {
    return (<>
        <div className="newsContainer">
            <h3>Nyhetsflöde</h3>

            <h4>Herrar B</h4>
            <div className="matchResult">
                <h4>Matchresultat 5/2</h4>
                <p>Järfälla IBK (B) - Karlberg BK</p>
                <h2>6 - 10</h2>
            </div>

            <h4>Herrar B</h4>
            <div className="message">
                <div className="newsProfile">
                    <img src={profilePicPlaceholder}/>
                    <div className="newsProfileName">
                        <h4>Markus</h4>
                        <p>Järfälla IBK</p>
                    </div>
                </div>
                <p>Har någon glömt ett par vita salming skor i kallhäll?</p>
            </div>

            <h4>Herrar B</h4>
            <div className="matchResult">
                <h4>Matchresultat 22/1</h4>
                <p>Järfälla IBK (B) - Högalids IF (B)</p>
                <h2>6 - 8</h2>
            </div>
        </div>
    </>)
}
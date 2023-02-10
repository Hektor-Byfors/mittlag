import "./Team.css"
import { useState } from "react";
import profilePicPlaceholder from "../.././assets/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
import profilePic from "../.././assets/innebandysquare.jpg"

export const Team = () => {
    const [contact, setContact] = useState(false)

    const showContact = () => {
        setContact(!contact)
    }

    return (<>
        <div className="teamContainer">
            <h3>Lagmedlemmar</h3>

            <h4>Målvakter</h4>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Målvakt 1</h4>
                    <p>Målvakt</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Målvakt 2</h4>
                    <p>Målvakt</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Målvakt 3</h4>
                    <p>Målvakt</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>

            <h4>Utespelare</h4>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePic}/>
                <div className="memberProfileName">
                    <h4>Hektor</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Utespelare 1</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Utespelare 2</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Utespelare 3</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Utespelare 4</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Utespelare 5</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Utespelare 6</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Utespelare 7</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Utespelare 8</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Utespelare 9</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>
            <div className="memberCard">
            <div className="memberProfile">
                <img src={profilePicPlaceholder}/>
                <div className="memberProfileName">
                    <h4>Utespelare 10</h4>
                    <p>Utespelare</p>
                </div>
            </div>
            <div className="numberContact">
                <h2>99</h2>
                <h3 onClick={() => showContact()}>Kontakt</h3>
            </div>
            </div>

            {contact &&            
                <div className="contact" onClick={() => showContact()}>
                    <div className="contactCard">
                        <div className="contactInfo">
                            <h4><span>Telefon:</span> 123 456 78 90</h4>
                            <h4><span>E-post:</span> spelare@järfällaIBK.se</h4>
                        </div>
                        <h3 onClick={() => showContact()}>Stäng</h3>
                    </div>
                </div>
            }

        </div>
    </>)
}
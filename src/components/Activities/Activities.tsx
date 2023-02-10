import "./activities.css"
import { useState } from "react";
import profilePic from "../.././assets/innebandysquare.jpg"
import profilePicPlaceholder from "../.././assets/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"

export const Activities = () => {
    const [tuesday, setTuesday] = useState(false)
    const [thursday, setThursday] = useState(false)

    const clickActivity = (day: string) => {
        if(day === "tuesday") {
            setTuesday(!tuesday)
        } else if(day === "thursday") {
            setThursday(!thursday)
        }
    }

    const [pracStatusTue, setPracStatusTue] = useState("Kommer")
    const [pracAnsweredTue, setPracAnsweredTue] = useState(true)

    const pracStatusChangeTue = (status: string) => {
        if(pracStatusTue === "Kommer") {
            setPlayerCountTue(playerCountTue - 1)
        } else if(pracStatusTue === "Ej svarat" && status === "Kommer") {
            setPlayerCountTue(playerCountTue + 1)
        }
        setPracStatusTue(status)
        setPracAnsweredTue(!pracAnsweredTue)
    }

    const [keepersCountTue, setKeepersCountTue] = useState(1)
    const [playerCountTue, setPlayerCountTue] = useState(7)


    const [pracStatusThu, setPracStatusThu] = useState("Ej svarat")
    const [pracAnsweredThu, setPracAnsweredThu] = useState(false)

    const pracStatusChangeThu = (status: string) => {
        if(pracStatusThu === "Kommer") {
            setPlayerCountThu(playerCountThu - 1)
        } else if(pracStatusThu === "Ej svarat" && status === "Kommer") {
            setPlayerCountThu(playerCountThu + 1)
        }
        setPracStatusThu(status)
        setPracAnsweredThu(!pracAnsweredThu)
    }

    const [keepersCountThu, setKeepersCountThu] = useState(2)
    const [playerCountThu, setPlayerCountThu] = useState(4)

    return (<>
        {!tuesday && !thursday &&
            <div className="activityContainer">
                <h3>Aktiviteter</h3>   

                <div className="activityHolder">
                    <h4>Tisdag - Herrar B</h4>
                    <div className="activityCard">
                        <div className="infoLeft">
                            <ul>
                                <li className="type">Träning</li>
                                <li>Kallhäll sporthall</li>
                                <li>20.00 - 21.30</li>
                                <li>Samling 19.45</li>
                            </ul>
                        </div>
                        <div className="infoRight">
                            <ul>
                                <li><span>Antal spelare:</span> {keepersCountTue + playerCountTue}</li>
                                <li><span>Status:</span> {pracStatusTue}</li>
                            </ul>
                            <h4 onClick={() => clickActivity("tuesday")}>Visa mer</h4>
                        </div>
                    </div>
                </div>

                <div className="activityHolder">
                    <h4>Torsdag - Herrar B</h4>
                    <div className="activityCard">
                        <div className="infoLeft">
                            <ul>
                                <li className="type">Träning</li>
                                <li>Viksjö sporthall</li>
                                <li>18.30 - 20.00</li>
                                <li>Samling 18.15</li>
                            </ul>
                        </div>
                        <div className="infoRight">
                            <ul>
                                <li><span>Antal spelare:</span> {keepersCountThu + playerCountThu}</li>
                                <li><span>Status:</span> {pracStatusThu}</li>
                            </ul>
                            <h4 onClick={() => clickActivity("thursday")}>Visa mer</h4>
                        </div>
                    </div>
                </div>

                <div className="activityHolder">
                    <h4>Söndag - Herrar B</h4>
                    <div className="activityCard">
                        <div className="infoLeft">
                            <ul>
                                <li className="type">Match</li>
                                <li>Westermalms IBK - Järfälla IBK (B)</li>
                                <li>Eriksdalshallen</li>
                                <li>20.30</li>
                                <li>Samling 19.30</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        }

        {tuesday &&
            <div className="activityInfo">
                <h3>Träning</h3>
                <div className="infoPrac">
                        <ul>
                            <li>Tisdag - Herrar B</li>
                            <li>Kallhäll sporthall</li>
                        </ul>
                        <ul className="infoRight">
                            <li>20.00 - 21.30</li>
                            <li>Samling 19.45</li>
                        </ul>
                </div>

                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePic}/>
                        <div className="profileInfoPrac">
                            <h4>Hektor</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>

                    <div className="statusHolder">
                        {pracAnsweredTue &&
                            <div className="answeredStatus">
                                <p>{pracStatusTue}</p>
                                <h4 onClick={() => {pracStatusChangeTue("Ej svarat")}}>Ändra status</h4>
                            </div>
                        }
                        {!pracAnsweredTue &&
                            <div className="unAnsweredStatus">
                                <h4 className="kommer" onClick={() => pracStatusChangeTue("Kommer")}>Kommer</h4>
                                <h4 className="kommerInte" onClick={() => pracStatusChangeTue("Kommer inte")}>Kommer <br/> inte</h4>
                            </div>
                        }
                        
                    </div>
                </div>

                <h4 className="playerGroup">Målvakter ({keepersCountTue})</h4>

                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Målvakt 1</h4>
                            <p>Målvakt</p>
                        </div>
                    </div>
                </div>

                <h4 className="playerGroup">Utespelare ({playerCountTue})</h4>

                {(pracStatusTue === "Kommer") && 
                    <div className="playerCard">
                        <div className="profilePrac">
                            <img src={profilePic}/>
                            <div className="profileInfoPrac">
                                <h4>Hektor</h4>
                                <p>Utespelare</p>
                            </div>
                        </div>
                    </div>
                }

                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Utespelare 1</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>
                </div>
                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Utespelare 2</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>
                </div>
                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Utespelare 3</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>
                </div>
                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Utespelare 4</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>
                </div>
                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Utespelare 5</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>
                </div>
                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Utespelare 6</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>
                </div>
                

                <h3 className="activityBack" onClick={() => clickActivity("tuesday")}>Tillbaka</h3>
            </div>
        }

        {thursday && 
            <div className="activityInfo">
                <h3>Träning</h3>
                <div className="infoPrac">
                        <ul>
                            <li>Torsdag - Herrar B</li>
                            <li>Viksjö sporthall</li>
                        </ul>
                        <ul className="infoRight">
                            <li>20.00 - 21.30</li>
                            <li>Samling 19.45</li>
                        </ul>
                </div>

                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePic}/>
                        <div className="profileInfoPrac">
                            <h4>Hektor</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>

                    <div className="statusHolder">
                        {pracAnsweredThu &&
                            <div className="answeredStatus">
                                <p>{pracStatusThu}</p>
                                <h4 onClick={() => {pracStatusChangeThu("Ej svarat")}}>Ändra status</h4>
                            </div>
                        }
                        {!pracAnsweredThu &&
                            <div className="unAnsweredStatus">
                                <h4 className="kommer" onClick={() => pracStatusChangeThu("Kommer")}>Kommer</h4>
                                <h4 className="kommerInte" onClick={() => pracStatusChangeThu("Kommer inte")}>Kommer <br/> inte</h4>
                            </div>
                        }
                        
                    </div>
                </div>

                <h4 className="playerGroup">Målvakter ({keepersCountThu})</h4>

                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Målvakt 1</h4>
                            <p>Målvakt</p>
                        </div>
                    </div>
                </div>
                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Målvakt 2</h4>
                            <p>Målvakt</p>
                        </div>
                    </div>
                </div>

                <h4 className="playerGroup">Utespelare ({playerCountThu})</h4>

                {(pracStatusThu === "Kommer") && 
                    <div className="playerCard">
                        <div className="profilePrac">
                            <img src={profilePic}/>
                            <div className="profileInfoPrac">
                                <h4>Hektor</h4>
                                <p>Utespelare</p>
                            </div>
                        </div>
                    </div>
                }

                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Utespelare 1</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>
                </div>
                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Utespelare 2</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>
                </div>
                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Utespelare 3</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>
                </div>
                <div className="playerCard">
                    <div className="profilePrac">
                        <img src={profilePicPlaceholder}/>
                        <div className="profileInfoPrac">
                            <h4>Utespelare 4</h4>
                            <p>Utespelare</p>
                        </div>
                    </div>
                </div>

                <h3 className="activityBack" onClick={() => clickActivity("thursday")}>Tillbaka</h3>
            </div>
        }
        
    </>)
}
import "./Main.css";
import Divider from "../Utils/Divider/Divider";
import {useEffect, useState} from "react";
import ActiveBar from "./ActiveBar/ActiveBar";

export default function Main() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function handleLogin() {
        window.location.href = "/login";
        // change to React router
    }

    function handleSignup() {
        window.location.href = "/signup";
        // change to React router
    }

            return (<div className="main">
                <div className={"main-content"}>
                    <div className="main-header">
                        <div className="main-header-titles">
                            <h1>Dashboar<u>d</u></h1>
                            <p>Your Workplace</p>
                        </div>
                        <div className="main-header-buttons">
                            <button onClick={handleLogin}>LOGI<u>N</u></button>
                            <p>Or</p>
                            <button onClick={handleSignup}>SIGN U<u>P</u></button>
                        </div>

                    </div>
                    <div className="main-cards">
                        <div className="main-cards-card">
                            <div className="main-cards-card-content">
                                <p className="main-cards-card-title">Today</p>
                                <h1 className="main-cards-card-primary">3h 50m 24s</h1>
                                <p className="main-cards-card-secondary">£43.79</p>

                            </div>
                        </div>
                        <div className="main-cards-card">
                            <div className="main-cards-card-content">
                                <p className="main-cards-card-title">This Week</p>
                                <h1 className="main-cards-card-primary">13h 23m 41s</h1>
                                <p className="main-cards-card-secondary">£283.51</p>

                            </div>
                        </div>
                        <div className="main-cards-card">
                            <div className="main-cards-card-content">
                                <p className="main-cards-card-title">This Month</p>
                                <h1 className="main-cards-card-primary">45h 12m 49s</h1>
                                <p className="main-cards-card-secondary">£958.38</p>

                            </div>
                        </div>
                        <div className="main-cards-card">
                            <div className="main-cards-card-content">
                                <p className="main-cards-card-title">Total</p>
                                <h1 className="main-cards-card-primary">98h 39m 26s</h1>
                                <p className="main-cards-card-secondary">£4,295.63</p>

                            </div>
                        </div>
                    </div>
                   <ActiveBar />
                    <div className="main-divider"></div>
                    <div className="main-history"></div>
                    <main className="footer"></main>
                </div>
            </div>)

        }
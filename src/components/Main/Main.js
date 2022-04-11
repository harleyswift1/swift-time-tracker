import "./Main.css";

export default function Main() {

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
                <div className="main-cards"></div>
                <div className="main-active"></div>
                <div className="main-divider"></div>
                <div className="main-history"></div>
                <main className="footer"></main>
            </div>
        </div>)

}
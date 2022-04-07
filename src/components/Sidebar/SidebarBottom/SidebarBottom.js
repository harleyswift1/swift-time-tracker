import "./SidebarBottom.css"

export default function SidebarBottom() {

    function handleButtonClick() {
        alert("This feature is not currently available");
    }
    return(
        <div className="sidebar-contents-bottom">
            <div className="sbc-bottom-widget">
                <div className="sbc-bottom-widget-contents">
                    <h1>Login or Sign U<u>p</u></h1>
                    <p>Please login to have access to all features and options, plus all of your progress will be saved!</p>
                    <div className="sbc-bottom-widget-contents-buttons">
                        <button onClick={handleButtonClick}>Logi<u>n</u></button>
                        <button onClick={handleButtonClick}>Sign U<u>p</u></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
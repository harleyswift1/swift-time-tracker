import "./NavigationItem.css"

export default function NavigationItem(props) {

    const iconDisabled = props.iconDisabled
    const iconEnabled = props.iconEnabled;
    const item = props.item;
    const selected = props.selected;

    return(
        <div
            className="sidebar-contents-top-navigation-item" style={{ borderLeft: selected ? "7px solid #732FA9" : '7px solid white'}}>
            <img src={selected ? iconEnabled : iconDisabled} alt=""/>
            <p>{props.item}</p>
        </div>
    )
}
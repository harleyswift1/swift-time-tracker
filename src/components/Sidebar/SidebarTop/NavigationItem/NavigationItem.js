import "./NavigationItem.css"

export default function NavigationItem(props) {
    const iconDisabled = props.iconDisabled
    const iconEnabled = props.iconEnabled;
    const item = props.item;
    const selected = props.id === props.selected
    const icon = selected ? iconEnabled : iconDisabled;

    const handleChange = event => {
        props.onChange(props.id);
    }

    return (<div onClick={handleChange} className="sidebar-contents-top-navigation-item" style={{borderLeft: selected ? "7px solid var(--primary-color)" : '7px solid white'}}>
            <img src={icon} alt=""/>
            <p>{item}</p>
        </div>)
}


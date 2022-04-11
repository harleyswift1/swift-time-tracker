import "./Divider.css"

export default function Divider(props) {
    const length = props.length;
    const vertical = props.vertical;

    if (vertical) {
        return (<div className="divider" style={{height: length}}/>);
    } else {
         return (<div className="divider" style={{width: length}}/>);
    }
}
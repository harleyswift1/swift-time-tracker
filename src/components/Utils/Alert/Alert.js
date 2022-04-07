import "./Alert.css"

export default function Alert(props) {
    return(
        <div className="alert">
            {props.message}
        </div>
    )
}

export function createAlert(message) {
    return(
        <Alert message={message} />
    )
}
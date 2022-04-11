import "./SidebarTop.css"
import NavigationItem from "./NavigationItem/NavigationItem";

import dashboard_icon from "../../../assets/dashboard_icon.png";
import history_icon from "../../../assets/history_icon.png";
import settings_icon from "../../../assets/settings_icon.png";

import dashboard_icon_selected from "../../../assets/dashboard_icon_selected.png"
import history_icon_selected from "../../../assets/history_icon_selected.png";
import settings_icon_selected from "../../../assets/settings_icon_selected.png";
import {useState} from "react";


export default function SidebarTop() {
    const [selected, setSelected] = useState(0);

    const onChange = (data) => {
        setSelected(data)
    }


    return (<div
        className="sidebar-contents-top">
        <h1>SWIF<u>T</u>
        </h1>
        <div
            className="sidebar-contents-top-navigation-content">
            <NavigationItem iconEnabled={dashboard_icon_selected} iconDisabled={dashboard_icon} item={"Dashboard"} id={0} selected={selected} onChange={(e) => {
                onChange(e)
            }}/>
            <NavigationItem iconEnabled={history_icon_selected} iconDisabled={history_icon} item={"History"} id={1} selected={selected} onChange={(e) => {
                onChange(e)
            }}/>
            <NavigationItem iconEnabled={settings_icon_selected} iconDisabled={settings_icon} item={"Settings"} id={2} selected={selected} onChange={(e) => {
                onChange(e)
            }}/>

        </div>
    </div>)
}
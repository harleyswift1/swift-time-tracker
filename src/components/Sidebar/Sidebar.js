import "./Sidebar.css";
import SidebarBottom
    from "./SidebarBottom/SidebarBottom";
import SidebarTop from "./SidebarTop/SidebarTop";

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar-contents">
                <SidebarTop />
               <SidebarBottom />
            </div>
        </div>
    )
}

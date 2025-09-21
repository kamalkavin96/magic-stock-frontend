import { useState } from "react";
import AppMainArea from "./components/appMainArea/AppMainArea";
import AppNavBar from "./components/appNavBar/AppNavBar";
import AppLeftPanel from "./components/appSideBar/AppLeftPanel";



export default function App() {

    const [openSideBar, setOpenSideBar] = useState(false);
    const [hoverSideBar, setHoverSideBar] = useState(false);

    const toggleSidebar = () => setOpenSideBar(!openSideBar);
    return (
        <div className="flex flex-col h-screen">
            <AppNavBar toggleSidebar={toggleSidebar}></AppNavBar>
            <div className="flex flex-1 overflow-hidden bg-gray-100">
                <AppLeftPanel openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} hoverSideBar={hoverSideBar} setHoverSideBar={setHoverSideBar}></AppLeftPanel>
                <AppMainArea openSideBar={openSideBar} hoverSideBar={hoverSideBar}></AppMainArea>
            </div>
        </div>
    );
}

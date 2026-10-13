import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.css"

const Root = () => {
    return (
        <div>
            <Header />
            <div className="root-main">
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
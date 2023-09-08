import { Outlet, NavLink, Link } from "react-router-dom";

import styles from "./Layout.module.css";
import FeedbackDialog from "../../components/FeedbackDialog/FeedbackDialog";
import FABFeedBack from "../../components/FABFeedBack/FABFeedBack";
import SideBarDrawer from "../../components/SideBarDrawer/SideBarDrawer";
import FolderTree from "../../components/FolderTree/FolderTree";


const Layout = () => {
    return (
        <div className="container flex ">
            <div className={styles.layout}>
                <Outlet />
            </div>
            {/* <SideBarDrawer /> */}
            {/* <FolderTree/> */}
            <FABFeedBack />
        </div>
    );
};

export default Layout;

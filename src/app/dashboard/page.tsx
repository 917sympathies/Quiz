import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import styles from "./style.module.css"

export default function DashboardPage(){
    return(
        <div>
            <Navbar/>
            <div className={styles.dashboard_container}>
                <h1 className={styles.dashboard_content}>Dashboard</h1>
                <Sidebar/>
            </div>
        </div>
    )
}
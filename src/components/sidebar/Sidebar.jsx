import styles from "./style.module.css"

const Sidebar = () =>{
    return(
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar_header}>
                <h1>FRIENDS</h1>
            </div>
            <div className={styles.sidebar_friendlist_container}>
                <h3>Friend1</h3>
                <h3>Friend2</h3>
                <h3>Friend3</h3>
            </div>
        </div>
    )
}

export default Sidebar;
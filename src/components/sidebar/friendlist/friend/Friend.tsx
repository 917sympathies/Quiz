import React from "react";
import styles from "./style.module.css"
import { FaPlus } from "react-icons/fa";

interface FriendProps{
    name: string
}

const Friend = ({name} : FriendProps) =>{
    return (
        <div className={styles.friend_container}>
            {name}
            <FaPlus/>
        </div>
    )
}

export default Friend;
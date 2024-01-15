'use client'

import React, {useState} from "react";
import styles from "./style.module.css"
import FriendList from "./friendlist/FriendList";

var mockFriendList = [
    {name: "Delaynore"},
    {name: "Sympathies"}
]

const Sidebar = () =>{
    
    const handleSendInviteToFriendList = () => {

        setInput("");
    }

    const [input, setInput] = useState("")

    return(
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar_header}>
                <h1>FRIENDS</h1>
            </div>
            <div className={styles.sidebar_friendlist_container}>
                <FriendList data={mockFriendList}></FriendList>
                <div className={styles.sidebar_input_container}>
                    <input type="text" onChange={(e) => setInput(e.target.value)} value={input}></input>
                    <span onClick={() => handleSendInviteToFriendList()}>SEND</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
import styles from "./style.module.css"
import React from "react"
import Friend from "./friend/Friend"

interface FriendListProps{
    data?: {
       name: string 
    }[]
}

const FriendList = ({data} : FriendListProps) => {
    return(
        <div className={styles.friendlist_container}>
            {data?.map(friend => {
                return <Friend key={friend.name.toString()} name={friend.name}></Friend>
            })}
        </div>
    )
}

export default FriendList;
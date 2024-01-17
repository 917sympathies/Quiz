'use client'
import React, {useState} from 'react'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import styles from "./style.module.css"

const QuestionPacksMock = [
    {id: 1, name: "Animals"},
    {id: 2, name: "Cars"},
    {id: 3, name: "Movies"}
]


export default function DashboardPage(){
    const [selectedQuestionPack, setSelectedQuestionPack] = useState("")

    const handleStartGame = () => {
        console.log(`You've selected quiz pack ${selectedQuestionPack}. Game start button was pressed!`);
    }

    return(
        <div>
            <Navbar/>
            <div className={styles.dashboard_container}>
                <div className={styles.dashboard_content}>
                    <span className={styles.dashboard_lobby_label}>GAME LOBBY</span>
                    <div className={styles.dashboard_lobby_container}>
                        <div className={styles.dashboard_lobby_players_container}>
                            <span style={{fontSize: "48px"}}>PLAYERS</span>
                            <div className={styles.dashboard_lobby_playerslist}>
                                LIST
                            </div>
                        </div>
                        <div className={styles.dashboard_lobby_questionpack_container}>
                            <span style={{fontSize: "48px"}}>QUIZ PACK</span>
                            <select onChange={(e) => setSelectedQuestionPack(e.target.value)}>
                                {QuestionPacksMock.map(qp => {
                                    return <option value={qp.name}>{qp.name}</option>
                                })}
                            </select>
                            <div className={styles.dashboard_lobby_startbtn} onClick={() => handleStartGame()}>
                                <span>START</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar/>
            </div>
        </div>
    )
}
'use client'
import React, {useState, useEffect} from 'react'
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import styles from "./style.module.css"
import { redirect } from 'next/navigation'

export interface IQuestionPack{
    id: number,
    theme: string
}

export interface IPlayer{
    username: string
}

export default function DashboardPage(){
    const [selectedQuestionPack, setSelectedQuestionPack] = useState<IQuestionPack>();
    const [questionPackList, setQuestionPackList] = useState<IQuestionPack[]>([]);
    const [playersList, setPlayersList] = useState<IPlayer[]>([])

    useEffect(() => {
        fetch("http://localhost:5000/api/QuestionPack", {
            method: "GET",
            headers: {"Content-Type":"application/json"},
        })
        .then(response => response.json())
        .then(data => {
            setQuestionPackList(data);
            setSelectedQuestionPack(data[0]);
        });
    },[]);

    const handleSelectQuestionPack = (theme : string) => {
        for(let i = 0; i < questionPackList.length; i++){
            if(theme == questionPackList[i].theme){
                setSelectedQuestionPack(questionPackList[i]);
                return;
            }
        }
    }

    const handleStartGame = async () => {
        console.log(`You've selected quiz pack ${selectedQuestionPack?.theme}. Game start button was pressed!`);
        const response = await fetch("http://localhost:5000/api/Game", {
            method: "POST",
            body: JSON.stringify(playersList),
            headers : {"Content-Type" : "application/json"}
        });
        const game = await response.json();
        redirect(`/game/${game.id}`);
    };

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
                            <select onChange={(e) => handleSelectQuestionPack(e.target.value)}>
                                {questionPackList.map(qp => {
                                    return <option key={qp.id} value={qp.theme}>{qp.theme}</option>
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
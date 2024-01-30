'use client'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { IPlayer, IQuestionPack } from "../../dashboard/page"

interface IUserResult{
    username: string,
    points: number
}

interface IGameResult{
    userResults: IUserResult[]
}

interface IGameInfo{
    id: string,
    status: GameStatus,
    visibility: GameVisibility,
    players: IPlayer[],
    questionPack: IQuestionPack,
    gameResult: IGameResult
}

enum GameStatus{
    Preparing,
    Ongoing,
    Finished
}

enum GameVisibility{
    Public,
    Private
}

function GamePage(
    {params} : {
    params: {id: string},
}){
    const [gameResult, setGameResult] = useState<IGameResult>()
    const [gameInfo, setGameInfo] = useState<IGameInfo>();
    useEffect(() => {
        fetch(`http://localhost:5000/api/Game/${params.id}`, {
            method: "GET",
            headers: {"Content-Type" : "application/json`"}
        })
        .then(response => response.json())
        .then(data => setGameInfo(data));
    }, [])
    return(
        <div>
            Game page {params.id} 
            <div>{JSON.stringify(gameInfo)}</div>
        </div>
    )
}

export default GamePage
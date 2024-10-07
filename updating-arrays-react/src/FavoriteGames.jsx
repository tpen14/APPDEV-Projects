import React,{useState} from 'react'

export default function FavoriteGames(){
    const [games,setGames] =useState(["Valorant", "League of Legends", "Genshin Impact"])
    function handleAddGame(){
      const newGame = document.getElementById("gameInput").value
      setGames(g=>[...g, newGame])
      document.getElementById("gameInput").value=""
    }
    function handleRemoveGame(index){
        const newGame =games.filter((game, i)=>i !== index)
        setGames(newGame)
      }
    return (
      <>
      <div>
        <h2>These are my favorite games on 2024:</h2>
          <ul>
            {
              games.map((game, index)=> <li key={index} onClick={()=>handleRemoveGame(index)}>{game}</li>)
            }
          </ul>
          <input type="text" name="gameInput" id="gameInput" />
          <button type='button'onClick={handleAddGame}>Add Game</button>
      </div>
      </>
    )
  }
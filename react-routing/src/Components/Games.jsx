import {Link} from 'react-router-dom'
const games = [
    {id: 1, name:'Teamfight Tactics', description: '#1 Auto Battling Game'},
    {id: 2, name:'Valorant', description: '#1 FPS Game'},
    {id: 3, name:'2XKO', description: '#1 tag-team fighting game'},
    {id: 4, name:'League of Legends', description: '#1 MOBA game'}
]

export default function Games(){

    return(
        <>
        <h1>Games List</h1>
        <ul>
            {games.map((game)=> (
                <li key = {game.id}>
                    <Link to = {`/games/${game.id}`} state={{game}}>{game.name} </Link>- {game.description}</li>
            ))}
        </ul>
        </>
    )
}
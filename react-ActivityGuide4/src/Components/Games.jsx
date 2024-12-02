import {Link} from 'react-router-dom'
import DevLogo from '../assets/Devour.png'
import RELogo from '../assets/ResidentEvil.png'
import CWLogo from '../assets/ContentWarning.png'
import ACLogo from '../assets/AnimalCrossing.png'
import AFKLogo from '../assets/AfkJourney.png'
import Dev from '../assets/DEV.jpg'
import RE from '../assets/RE7.jpg'
import CW from '../assets/CW.jpg'
import AC from '../assets/ACNL.jpg'
import AFK from '../assets/AFK.jpg'
const games = [
    {id: 1, name:'Content Warning', pic: `${CWLogo}`, ban: `${CW}`,  
    description: 'Get famous or die trying! Content Warning is a co-op horror game where you film spooky stuff with your friends to try and go viral. '},
    {id: 2, name:'Devour',pic: `${DevLogo}`,ban: `${Dev}` , description: 'DEVOUR is a co-op horror survival game for 1-4 players. Stop possessed cultists before they drag you to hell.'},
    {id: 3, name:'Resident Evil 7: Biohazard`1', pic: `${RELogo}`,ban: `${RE}` , 
    description: 'Resident Evil 7: Biohazard is a first-person survival horror game produced by Capcom Co., Ltd. It is set in mid-2017 somewhere in the southern United States, where there have been reports of "ghosts" sighted around the bayou of the town, Dulvey.',
    },
    {id: 4, name:'Animal Crossing: New Leaf', pic: `${ACLogo}`, ban: `${AC}` ,
    description: 'Animal Crossing: New Leaf is a life simulation video game released in 2012 for the Nintendo 3DS. The player takes on the role of mayor of a new town, and with the help of the townsfolk and Isabelle, an eager secretary, it will be their job to make the town a better place to live.'},
    {id: 5, name:'AFK Journey',pic: `${AFKLogo}`, ban: `${AFK}` ,
     description: 'AFK Journey is an ethereal fantasy RPG developed and published by Farlight Games for the PC, iOS and Android. The game is free-to-play with a gacha monetization system in the form of Recruitment Events.'}
]


export default function Games(){

    return(
        <>
        <h1>Games List</h1>
        <ul className='gamecard'>
            {games.map((game)=> (
                <li key = {game.id} className='game'>
                <Link to = {`/games/${game.id}`} state={{game}}>
                <img src={game.pic}alt="" className='logo'/> <br />
                     </Link></li>
            ))}
        </ul>
        </>
    )
}
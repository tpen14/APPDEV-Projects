import { useLocation } from "react-router-dom"


export default function Game(){
    const reviewList= {
        1:[ {id:1,
            username:'Riley',
            rating:'*****',
            rev:'Most fun I have had playing an unserious horror game. Must have friends to play this because it will be so fun.'},
            {id:2,
            username:'Rooubus',
            rating:'*****',
            rev:'Fun and scary and unique and funny and engaging and fun with friends'},
            {id:3,
            username:'Jude',
            rating:'****',
            rev:'I love this game! It is EXTREMELY fun to play with friends and the chases are always intense! The proximity voice chat adds to the experience, and overall it is always a fun time! '},
            {id:4,
            username:'RoofopFox',
            rating:'**',
            rev:'I wouldn’t recommend this game. It looks nice, but its gameplay is far from perfect. I didn’t notice any bugs but it’s just not fun to play. '},
            {id:5,
            username:'Luke',
            rating:'*****',
            rev:'So good, there are ghosts and is scary.'},
        ],
        2:[ {id:1,
            username:'Isaac',
            rating:'****',
            rev:'I have played this game for about 10 hours and it is very fun. it\'s a great coop horror game involving 1-4 people trying to collect items for a ritual to save a friend while their now demon possessed friend hunts them down and trys to stop them from releasing azazal from withen them.'},
            {id:2,
            username:'Mary',
            rating:'****',
            rev:'After playing Phasmophobia, Steam suggested Devour and i must say, it was a great suggestion. Loved the game play, the maps are nice, i still get jump scares from playing. '},
            {id:3,
            username:'Bobby',
            rating:'*****',
            rev:'This is the most fun I\'ve had in a game for a while now. I love the dreadful feeling of being chased by a possessed person. It looks, feels, and SOUNDS amazing, yet terrifying at the same time.'},
            {id:4,
            username:'Auden',
            rating:'*****',
            rev:'This game is absolutely amazing. I got my friends to start playing it with me, and now we\'re all hooked!'},
            {id:5,
            username:'Cooper',
            rating:'****',
            rev:'Amazing game, graphics, animals, and just all the little details. it\'s just a little laggy but I\'ve gotten used to it. Great game!'},
        ],
        3:[ {id:1,
            username:'Budak',
            rating:'*****',
            rev:'Genuinely the greatest horror game I\'ve ever played, so far. The music is just amazing, and really nostalgic whenever returning to the game, and it feels so relieving, knowing that it comes from such a truly amazing game. '},
            {id:2,
            username:'Erin',
            rating:'****',
            rev:'.it is the best survival horror game I have ever played. Capcom has done very well making this game different from other resident evil games after many boring games in this series.'},
            {id:3,
            username:'Simon',
            rating:'****',
            rev:'This is a thoroughly enjoyable game and it has a lot of scares and tight gameplay to boot.'},
            {id:4,
            username:'Brandon',
            rating:'****',
            rev:'Absolutely love this game, there\'s never a dull moment and the story is intense. I\'d call this somewhat of an action thriller rather than action horror, because it\'s not necessarily scary but it keeps you on the edge of your seat.'},
            {id:5,
            username:'Destiny',
            rating:'*****',
            rev:'Just completed the campaign and man is this game amazing!! The graphics are incredible the story is interested and fun and the core gameplay just works!!'},
        ],
        4:[ {id:1,
            username:'Rose',
            rating:'****',
            rev:'What makes this game so great for me is the sense of accomplishment. You start off with nothing, and you are the one responsible for building public projects and keeping the town beautiful.'},
            {id:2,
            username:'Max',
            rating:'*****',
            rev:'This is my favorite 3DS game. And I already loved Animal Crossing in the first place. However this new edition has come out to make this one of the best games I’ve ever played!'},
            {id:3,
            username:'Zeke',
            rating:'*****',
            rev:'Animal Crossing is my favourite of all franchises! It\'s super cute and different from New horizons!'},
            {id:4,
            username:'Ash',
            rating:'*****',
            rev:'This was the first game I had ever played in the Animal Crossing series, and I fell in love instantly.'},
            {id:5,
            username:'Audrey',
            rating:'****',
            rev:'So fun to play! just like creating your own island. so many fun actvities to do! fishing, bug catching, getting new villagers.'},
        ],
        5:[ {id:1,
            username:'MMOROPG.com',
            rating:'****',
            rev:'AFK Journey manages to do a lot of things right with their wide array of game modes, and it all starts with a familiar feeling story, where you, as the protagonist, find yourself with a bout of amnesia.'},
            {id:2,
            username:'James',
            rating:'****',
            rev:'I feel confident in saying it may be among the best RPGs I’ve played this year. '},
            {id:3,
            username:'Sajuuk',
            rating:'****',
            rev:'AFK Journey launched in March 2024 as Lilith Games\' latest entry in their AFK series, showcasing significant advancements in both visual design and technical execution.'},
            {id:4,
            username:'Dorothy',
            rating:'***',
            rev:'Aesthetically this game is good but Dragonheir Silent Gods tops in all of the criteria and better than this.'},
            {id:5,
            username:'Elphaba',
            rating:'*****',
            rev:'If u came from afk journey you may love this one because ots is well made high quality game , also it works fine on low end ~ mid devices whoch is great , walking through a story battles collecting heroes and resources , and alot of fun because it is a long time progress game to build a goos account'},
        ],
        
      
    }
    const location = useLocation()
    const game = location.state.game
    const reviews = reviewList[game.id] || [];
    return(
        <>
        <div className = "">
            <h1>{game.name}</h1>
            <p>{game.description}</p>
            <img src={game.ban} className="banner"></img>
            <h3>Reviews</h3>
            <ul className="reviews"> 
            {reviews.map((review) => (
                <li key={review.id}>
                    <div className="users">
                      <h4>{review.username}</h4>
                    </div>
                    <div className="review-snippet">
                      <p className="stars">Rating: <strong>{review.rating}</strong></p>
                      <p>{review.rev}</p>
                    </div>
                </li>
              ))}
            </ul>
        </div>
        </>
    )
}
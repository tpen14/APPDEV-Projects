import PropTypes from 'prop-types'
export default function Body(props){
    return(
        <div className="person">
            <img src={props.image} alt="person-logo" className="person-picture"/>
            <p>Hello! My name is <strong>{props.name}</strong></p>
            <p>I am currently <strong>{props.age}</strong>  years old.</p>
            <p>Born on <strong>{props.birthdate}</strong> at <strong>{props.birthplace}</strong></p>
            <p>Am I currently studying? <strong>{props.isStudying ? "Yes":"No"}</strong></p>
            <p>They are currentliy studying in <strong>{props.school}</strong> and is taking <strong>{props.course}</strong></p>
            <p>They like <strong>{props.likes}</strong> and dislike <strong>{props.dislikes}</strong></p>
        </div>
    )
}

Body.defaultProps = {
    image: "https://placeholder.pics/svg/150x150",
    age:0,
    birthdate: "YYYY/MM/DD",
    birthplace: "City",
    isStudying: false,
    school: "N/A",
    course: "N/A",
    likes: "something good",
    dislikes: "something bad"

}

Body.propTypes= {
    name: PropTypes.string,
    food: PropTypes.string,
    isstudying: PropTypes.bool,
    age: PropTypes.number
}
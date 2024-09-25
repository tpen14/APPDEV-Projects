import PropTypes from 'prop-types'
export default function Body(props){
    return(
        <>
        <div className="main">
            <h1>{props.model}</h1>
            <h4><strong>Product Overview</strong></h4>
            <p>The KB-X1000 is a high-performance mechanical keyboard designed for gamers, 
            professionals, and everyday users who demand precision and comfort. It features customizable RGB 
            backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming 
            experience.</p>
        </div>
        <div className="specs">
            <h2>Specifications:</h2>
            <p><strong>Switch Type: </strong>{props.switch}</p>
            <p><strong>Key Layout: </strong>{props.layout}</p>
            <p><strong>Backlighting: </strong>{props.light}</p>
            <p><strong>Connectivity: </strong>{props.connect}</p>
            <p><strong>Dimensions: </strong>{props.size}</p>
            <p><strong>Weight: </strong>{props.weight}kg</p>
            <p><strong>Cable Length: </strong>{props.cable} meter/s</p>
            <p><strong>Additional Features: </strong>{props.feat}</p>
        </div>
        <div className="box">
            <h3>In The Box:</h3>
            <ul>
                <li>KB-X1000 Keyboard</li>
                <li>USB Cable</li>
                <li>User Manual</li>
                <li>Keycap Removal Tool</li>
                <li>Warranty Card</li>
            </ul>
        </div>
        <div className="key-feat">
            <h3>Key Features</h3>
            <p><strong>Customizable RGB Backlighting:</strong> Personalize the keyboard’s illumination with a wide range of colors 
and lighting effects.</p>
            <p><strong>Mechanical Switches:</strong> Cherry MX Red switches for a responsive and smooth typing experience.
</p>
            <p><strong>Programmable Keys:</strong> Assign macros and custom functions to any key with the included software.</p>
            <p><strong>Anti-Ghosting & N-Key Rollover:</strong> Ensure accurate keypress registration during intense gaming 
sessions.</p>        
            <p><strong>Dedicated Media Controls: </strong> Easily control music and videos with dedicated media keys.</p>
        </div>

        </>
    )
}

Body.defaultProps = {
    model: "Keyboard",
    switch: "Gateron Brown Switches",
    layout: "100% layout (104 keys)",
    light: "No Backlight",
    connect: "Wired (USB 2.0)",
    size: "440 mm x 135 mm x 35 mm",
    weight: 1,
    cable: 1,
    feat: "N/A"
}

Body.propTypes = {
    model: PropTypes.String,
    switch: PropTypes.String,
    layout: PropTypes.String,
    light: PropTypes.String,
    connect: PropTypes.String,
    size: PropTypes.String,
    weight: PropTypes.number,
    cable: PropTypes.number,
    feat: PropTypes.String
}
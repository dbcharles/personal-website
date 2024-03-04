function Buttons(props) {
    /*const Bclick = () => {
            <a href={props.link}
            target="_blank"
            rel="noopener noreferrer">
            </a>
    }
    */

    return (
        <a href={props.link}
            target="_blank"
            rel="noopener noreferrer">
            <button className="buttons" /*onClick={Bclick}*/>
                {props.buttonname}
            </button>
        </a>
    );
}

export default Buttons;
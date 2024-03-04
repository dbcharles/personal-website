
function Icons(props) {
    return(<a className='gmaillink'
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
    >
   <img src={props.img} className="iconContent" alt="gmail logo"/>
   </a>);
}

export default Icons;
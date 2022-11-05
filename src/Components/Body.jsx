import Image from "../Images/profile.jpeg";
import Image2 from '../Images/Icon.svg';
import Image3 from '../Images/slack.svg';
import Image5 from '../Images/avatar.svg';
import Image6 from '../Images/hamburger.svg';
import {Outlet, Link} from 'react-router-dom'

const Body= ()=>{
    const links=[
        {
            id:"twitter",
            name:"Twitter Link",
            link:"https://twitter.com/OnweaniJoy"
        },
        {
            id:"btn_zuri",
            name:"Zuri Team",
            link:"https://training.zuri.team/"
        },
        {
            id:"books",
            name:"Zuri Books",
            link:"http://books.zuri.team"
        },
        {
            id:"book_python",
            name:"Python Books",
            link:"https://books.zuri.team/python-for-beginners?ref_id=<JoyOnweani>"
        },
        {
            id:"pitch",
            name:"Background Checks For Coders",
            link:"https://background.zuri.team"
        },
    ]
    return(
        <div className="container">
          <div className="header">
            <div className="profile">
                <div className=""><img src={Image} alt="profilePic" id="profile__img"/></div>
                <div  className="avatar"><img src={Image5} alt="avatar" /></div>
                <div  className="hamburger"><img src={Image6} alt="hamburger" /></div>
            </div>
            
            <h3 id="twitter">Onweani Joy</h3>
            <h3 id="slack">Joy Onweani</h3>
            </div>
            <div className="linksSocialContainer">
        
            {links.map((link)=>(
                     <a className="link" key={link.id} id={link.id} href={link.link}
                     target={"_blank"}
                     rel="noopener noreferrer">
                     <button>
                     {link.name}
                     </button>
                     </a>
                ))}
                <Link to= 'Contact' id="contact" className="link"><button>Contact</button> </Link>
        
            <div className="socials">
            <img src={Image3} alt="zuriSlack" />
            <a href="https://github.com/joyamakacodes/zuri-first-task" target={"_blank"} rel="noopener noreferrer" >
            <img src={Image2} alt="zurigithub" />
            </a>
            
            </div>
            </div> 
            <Outlet></Outlet> 
        </div>
    )
}

export default Body
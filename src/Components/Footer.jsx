import Image1 from '../Images/I4G.svg';
import Image4 from '../Images/logo.svg';

const Footer= ()=>{
    return(
        <div className='footer'>
            <hr />
        <div className='footerContainer'>
            <div>
            <img src={Image4} alt="zuriSvg" id='footerlogo' />
            </div>
            <div>
            <p>HNG Internship 9 Frontend Task</p>
            </div>
            <div>
            <img src={Image1} alt="zuriSvg" id='footerlogo' />
            </div>
        </div>
           
            
            
        </div>
    )
}
export default Footer
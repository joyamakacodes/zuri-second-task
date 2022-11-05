import { useState } from "react";
const Input = ()=>{
    const [name, setName]= useState("");
    const [lastName, setLastName]= useState("");
    const [email, setEmail]= useState("");
    const [message, setMessage]= useState("");
    const [check, setCheck]= useState(false);
  
    
    const handleSubmit =(event)=>{
        event.preventDefault();
    if(name === ' ' || lastName === '' || email === '' || message === '' || check === false) {
        alert('please fill form appropriately')
    }else {
        alert('Message sent')
    }
  

    }
return(
    <form onSubmit={handleSubmit}>

            <div className="inputCon">
                <div>
                    <div>
                    <label>First Name</label>
                    </div>
                    <div>
                    <input type="text" id="first_name" value={name}  placeholder="Enter Your first name" className= "input" onChange={(e)=> setName(e.target.value)} />
                    </div>
                </div>
                 <div>
                 <div>
                 <label>Last Name</label>
                 </div>
                 <div>
                 <input type="text" id="last_name" value={lastName}  placeholder="Enter Your last name" className= "input" onChange={(e)=> setLastName(e.target.value)} />
                 </div>
             </div>
            
                </div>
                <div>
                    <label>Email</label>
                    </div>
                    <div>
                    <input className="input" type="email" id="email" value={email} placeholder="yourname@email.com" onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                <label>Message</label>
                <textarea id="message" rows="6" placeholder="Send me a message and I'll reply you as soon as possible.." value={message}  onChange={(e)=> setMessage(e.target.value)} ></textarea>
                <div className="subText">
                    <div>
                    <input  type="checkbox"  onChange={(e)=> setCheck(true)}/>
                    </div>
                    <div>
                    <p id="textareatext">  You agree to providing your data to Joy Onweani who may contact you.</p>
                    </div>
                </div>
                
                <button id="btn__submit">Send message</button>
                </form>
)
}
export default Input
import React,{useState} from "react";
import "./App.css";

export default function App() {
  const[validEmail,setValidEmail] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errormessage, setErrorMessage] = useState();

  function handleChange(event){
    setFormData(
      {...formData,
        [event.target.name]: event.target.value}
    )
    
  }

  function validateEmail(){
    const emailRegex = /^[^\s@]+@[\s@]+\.[\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);
    setValidEmail(isValidEmail)
    console.log(validEmail);
     
  }
 
  
  function handleSubmit(e){
    e.preventDefault();
    validateEmail();
    console.log(
      `First Name: ${formData.firstName}, Last Name: ${formData.lastName}, Email: ${formData.email}, Message: ${formData.message}`
    )
    
    setErrorMessage(!validEmail? 
      <span id='errorMessage'>enter a valid email</span> 
      :<span></span>);

    if(validEmail){
      formData.firstName = ''
      formData.lastName = ''
      formData.email = ''
      formData.message = ''
      
    }
    
   
  }
  return (
    <div className="App">
      <h1>contact us</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input name="firstName" placeholder='first-name' onChange={handleChange} value={formData.firstName} required/>
        <input name="lastName" placeholder='last-name' onChange={handleChange} value={formData.lastName} required/>
        <div className='emailSection'>
            <input name="email" id={!validEmail? 'errorBorder': ''} placeholder='email' onChange={handleChange} value={formData.email}  required/>           
         {errormessage}
        </div>
        <textarea name='message' placeholder='message' onChange={handleChange} value={formData.message}></textarea>
        <button>submit</button>
      </form>
    </div>
  );
}

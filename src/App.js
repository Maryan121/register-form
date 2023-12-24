import React,{useState} from "react";
import "./App.css";

export default function Baroowo() {
    const [error,setError] = useState({errorMessage: '',errorStyle: {}});
    const [passErrorMessage,setPassErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthday: '',
        number: '',
        password: '',
        confirm: '',
    });

  function handleChange(event){
    setFormData(
      {...formData,
        [event.target.name]: event.target.value}
    )
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const validEmail = emailRegex.test(formData.email)
       if(!validEmail){
        setError({errorStyle: {color: 'red', border: 'red solid 2px'}, errorMessage: <span style={{color: 'red', display:'block', margin: '.3rem .1rem'}}>enter a valid email</span>})
        return;    
       }

    //checking if password and confirm do match
    if(formData.confirm.toLowerCase() !== formData.password.toLowerCase()){
      // console.log(`password: ${formData.password}, confirm: ${formData.confirm}`)
      setPassErrorMessage(<span style={{color: 'red',display: 'block',margin: '.2rem .1rem'}}>Passwords do not match.</span>)
      return;
    }else{
      setPassErrorMessage('')
    }

     //showing the entered data to the consule.log
      console.log(` first-name: ${formData.firstName},\n last-name: ${formData.lastName},\n Email: ${formData.email},\n Birthday: ${formData.birthday},\n phoneNumber: ${formData.number},\n password: ${formData.password},\n confirm: ${formData.confirm}`)

    formData.firstName = ''
    formData.lastName = ''
    formData.email = ''
    formData.birthday = ''
    formData.number = ''
    formData.password = ''
    formData.confirm = ''

    setError({errorStyle: {}, errorMessage: ''})


   
   
  }

  const [showPassword,setShowPassword] = useState(false)
  
  return (
    <div className="App">
      <h1>Register</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input name="firstName" placeholder='first-name' onChange={handleChange} value={formData.firstName} required/>
        <input name="lastName" placeholder='last-name' onChange={handleChange} value={formData.lastName} required/>
        
        <div className='emailSection'>
          <input
            name="email"
            style={error.errorStyle}
            placeholder='example@gmail.com'
            onChange={handleChange}
            value={formData.email}
            required
          />
           {error.errorMessage}
        </div>

        <input name="birthday" type="date" onChange={handleChange} value={formData.birthday} required/>
        <input name="number" type="number" onChange={handleChange} value={formData.number} placeholder="+252 610 000 000(optional)"/>

        <input name="password" placeholder="password" type={showPassword? 'text' : 'password'} onChange={handleChange} value={formData.password} required/>
        <input  name="confirm" placeholder="confirm" type={showPassword ? 'text' : 'password'} onChange={handleChange} value={formData.confirm} required/>

          {/* showing error message if passwords do not match */}
        {passErrorMessage}
        
        <label className="showPasswordLabel">
          <input type="checkbox" 
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

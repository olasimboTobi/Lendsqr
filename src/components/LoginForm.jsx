import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css"

function LoginForm() {

  const navigate = useNavigate();

  
  const[showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail('');
    setPwd('');
    navigate('/users')
  }

  return (
    <section>
      <h1 className="section--header">Welcome!</h1>
      <p className="section--text">Enter details to login</p>
      <form className="section--form" onSubmit={handleSubmit}>
        
        <input
            type="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            required
            className="section--email"
        />

        <div className="section--pwd">
          <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              name="pwd"
              required
              className="section--pwd--input"
          />
          <p className="section--show" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</p>
        </div>
        
        <p className="section--forget--pwd">FORGET PASSWORD ?</p>
        <button className="section--btn">LOG IN</button>
        
      </form>
      
    </section>

  )
}

export default LoginForm
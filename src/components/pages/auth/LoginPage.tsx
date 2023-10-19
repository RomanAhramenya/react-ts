import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email')
    const password = formData.get('password')

    fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} name="email" />
        <input type="text" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} name="password" />
        <input type="submit" name="submit" />
      </form>
    </div>
  )
}

export default LoginPage

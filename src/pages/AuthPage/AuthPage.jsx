import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from "react";


export default function AuthPage({ setUser }) {
  const [showForm, setShowForm] = useState(true)
  return (
   
      <>
    <main className="auth-page">
      <br />
      <h3>Sweet Treats Creations</h3>
        <button className="not-btn" onClick={() => setShowForm(!showForm)} >
        {showForm ? "SIGN UP" : "SIGN IN"}
        </button>
        <br />
      { showForm ? <SignUpForm  setUser={setUser} /> :  <LoginForm  setUser={setUser} /> }
      <br />
    </main>
    </>
  );
}
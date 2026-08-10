import Image from "next/image";
import './page.css';

export default function Home() {
  return (
    <div id="page">
      <form id="login-box">
        <h1>Welcome back!</h1>
        <h2>Log in with email.</h2>
        <input type="text" id="email" placeholder="Email Address"/>
        <input type="text" id="password" placeholder="Password"/>
        <input type="submit" id="login" value="login"/>
        <input type="button" id="create" value="Create an account"/>
      </form>
    </div>
  );
}

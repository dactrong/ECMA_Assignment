import Footer from "../components/footer";
import Header from "../components/header";

const About = {
    render(){
      return/* html*/`
      ${Header.render()}
      <h1 class = "bg-black">helo</h1>
      ${Footer.render()}
      `;
    }
  }

  export default About;
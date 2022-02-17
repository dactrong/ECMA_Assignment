import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newList";


const  Homepage = {
   async render (){
        return /*html*/`
        <div>${Header.render()}</div>
        <div>${Banner.render()}</div>
        <div>${await NewList.render()}</div>
        <div>${Footer.render()}</div>
       
        

        `
    },
};
export default Homepage;
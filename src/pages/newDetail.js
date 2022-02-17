import Footer from "../components/footer";
import Header from "../components/header";
import data from "../data";
 const newDetail ={
     render(id){
        const result = data.find((post) => post.id === id);

         return /*html*/`
         ${Header.render()}
            <h1>${result.title}</h1>
            <img src="${result.img}" />
            <p>${result.desc}</p>
            ${Footer.render()}
         `;
     },
 };
 export default newDetail;
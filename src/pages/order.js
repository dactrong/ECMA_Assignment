import Footer from "../components/footer";
import Header from "../components/header";

const Order ={
    render(){
        return /*html*/`
        ${Header.render()}
         <h2>Xin lỗi</h2>
        ${Footer.render()}
        `
       
    }
}
export default Order;
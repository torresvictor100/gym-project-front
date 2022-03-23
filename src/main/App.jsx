import "./App.css"
import Logo from "./components/template/Logo"
import Header from "./components/template/Header"
import Nav from "./components/template/Nav"
import Footer from "./components/template/Footer"
import Main from "./components/template/Main"

export default props =>
    <div className="app" >
        <Nav/>
        <Main/>
        <Header title="Inicio" subtitle="Aplicativo para melhorar a administração da sua academia" />
        <Logo/>
        <Footer/>
    </div>

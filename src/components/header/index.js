import Logo from "../../res/Logo.png";
import { MenuHeader } from "./menuHeader/menuHeader";

export const Header = () => {
    return (
        <header style={container}>
            <a style={{display :"flex", justifyContent: "center", width :"100%"}} href="/">
                <img src={Logo} style={imgstile}/>
            </a>
            <MenuHeader />
        </header>
    );
}

const container = {
    display : "flex",
    flexDirection : "column",
    backgroudColor : "#000",
    width : "100%",
    height : "auto",
    alignItems : "center",
    justifyContent : "center"
}

const imgstile ={
    width : "480px"
}
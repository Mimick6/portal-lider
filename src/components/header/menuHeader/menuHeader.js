export const MenuHeader = () => {
    return(
        <nav style={container}>
            <ul style={menu}>
                <li><a style={linkStyle} href="/">Home</a></li>
                <li><a style={linkStyle} href="/sobre">Sobre</a></li>
                <li><a style={linkStyle} href="/noticias">Notícias</a></li>
                <li><a style={linkStyle} href="/programacao">Programação</a></li>
                <li><a style={linkStyle} href="/horoscopo">Horoscopo</a></li>
                <li><a style={linkStyle} href="/eventos">Eventos</a></li>
                <li><a style={linkStyle} href="/contato">Contato</a></li>
            </ul>
        </nav>
    )
}

const container = {
    display: "flex",
    width : "100%",
    padding: "10px",
    justifyContent: "center",
    backgroundColor: "rgb(121, 121, 121)",
}

const menu = {
    display: 'flex',
    width: '50%',
    listStyle: 'none',
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
}
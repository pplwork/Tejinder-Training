function Header({ children }) {
    return (
        <header className="header">
            <h1 className="heading__primary">{children}</h1>
            <h1 className="heading__hover">{children}</h1>
        </header>)
}

export default Header
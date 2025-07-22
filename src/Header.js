function Header({returnHome}) {
    return(
        <div className="header">
            <h1 onClick={returnHome}>App Name: Quiz for Doctors</h1>
        </div>
        )
}

export default Header;
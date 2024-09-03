import './navbar.scss'

function Navbar() {
    return (
        <div className="navbar">
            {/* {Sidebar} */}
            <div className="wrapper">
                <span>PRIYADHARSHINI T.</span>
                <div className="social">
                    <a href="">
                        <img src="/github.png" alt="" />
                    </a>
                    <a href="">
                        <img src="/linkedin.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
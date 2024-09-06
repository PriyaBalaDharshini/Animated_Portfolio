import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'

function Navbar() {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <span>Priya's Vault</span>
                <div className="social">
                    <a href="https://github.com/PriyaBalaDharshini" target='_blank' >
                        <img src="/github.png" alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target='_blank' >
                        <img src="/linkedin.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
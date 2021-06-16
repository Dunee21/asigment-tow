import {navitems} from '../navitems'
import {Link} from 'react-router-dom'

const SideBar = () => {
    return (
        <nav id="sidenav">
            {
                navitems.map((item) => (
                    <Link to={item.path} key={item.id} className="navitem">
                        <div className="icon-container">{item.icon}</div>
                        <div>{item.title}</div>
                    </Link>
                ))
            }
        </nav>
    )
}

export default SideBar

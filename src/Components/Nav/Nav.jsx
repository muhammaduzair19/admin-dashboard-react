import './nav.css'
import MenuIcon from '@mui/icons-material/Menu';



function Nav({ sidebarShow, setSidebarShow }) {


    function sidebar() {
        setSidebarShow(!sidebarShow)
        console.log(sidebarShow);
    }



    return (
        <nav className="navbar">
            <div className="menuBtn">
                <button onClick={() => sidebar()} className="humburger">
                    <MenuIcon className='menuIcon' />
                </button>
            </div>
        </nav>
    )
}

export default Nav;
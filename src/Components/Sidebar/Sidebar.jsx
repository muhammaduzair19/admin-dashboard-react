import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Link } from 'react-router-dom';


function Sidebar({ sidebarShow }) {


    function MenuItem({ icon, itemname }) {


        return (
            <Link to={itemname === "Dashboard" ? `/` : `/${itemname}`} className="menuitem" style={{ justifyContent: sidebarShow ? "center" : "flex-start" }}>
                <div className="icon">
                    {icon}
                </div>
                <div className='itemBtn' style={{ display: sidebarShow ? "none" : "block" }}>
                    {itemname}
                </div>
            </Link>
        )
    }


    return (
        <div id="sidebar" style={{ width: sidebarShow ? '60px' : '250px' }}>
            <div className="logo">
                O
            </div>
            <div className="menuitems">
                <MenuItem icon={<DashboardIcon />} itemname="Dashboard" />
                <MenuItem icon={<LocalOfferIcon />} itemname="Offer" />
                <MenuItem icon={<GroupIcon />} itemname="Users" />
                <MenuItem icon={<PersonIcon />} itemname="Business" />
                <MenuItem icon={<SmartToyIcon />} itemname="Bot" />
            </div>
        </div>
    )
}

export default Sidebar;
import BarChartBox from '../../Components/BarChart/BarChartBox'
import Charts from '../../Components/Charts/Charts'
import PieChartBox from '../../Components/PieChartBox/PieChartBox'
import TopUsers from '../../Components/TopUsers/TopUsers'
import './Dashboard.css'


function Dashboard() {
    return (
        <div id='dashboard'>
            <div className="boxes">
                <div className="box box1">
                    <TopUsers/>
                </div>
                <div className="box box2">
                    <Charts dataAbout="Users" />
                </div>
                <div className="box box3">
                    <Charts dataAbout="Business" />
                </div>
                <div className="box box4">
                    <Charts dataAbout="Revenue" />
                </div>
                <div className="box box5">
                    <BarChartBox />
                </div>
                <div className="box box6">
                    <PieChartBox />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
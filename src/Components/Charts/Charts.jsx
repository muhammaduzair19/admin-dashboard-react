import { Link } from 'react-router-dom'
import './charts.css'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'


function Charts({ dataAbout }) {

    const data = [
        {
            name: 'User 1',
            uv: 4000,
            number: 2400,
            amt: 2400,
        },
        {
            name: 'User 2',
            uv: 3000,
            number: 1398,
            amt: 2210,
        },
        {
            name: 'User 3',
            uv: 2000,
            number: 9800,
            amt: 2290,
        },
        {
            name: 'User 4',
            uv: 2780,
            number: 3908,
            amt: 2000,
        },
        {
            name: 'User 5',
            uv: 1890,
            number: 4800,
            amt: 2181,
        },
        {
            name: 'User 6',
            uv: 2390,
            number: 3800,
            amt: 2500,
        },
        {
            name: 'User 7',
            uv: 3490,
            number: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className='chartBox'>
            <div className="boxText">
                <h3 className="title">{dataAbout}</h3>
                <h1 className="UserNumber">1100</h1>
                <Link className='link' to={`/${dataAbout}`}>View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={data}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: -50, y: 60 }}
                            />

                            <Line type="monotone" dataKey="number" stroke="#8884d8" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="info">
                    <span className="percent">50%</span>
                    <span className="duration">this month</span>
                </div>
            </div>

        </div>
    )
}

export default Charts
import './PieChartBox.css'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';



function PieChartBox() {

    const data = [
        { name: 'Earning', value: 900, color: "green" },
        { name: 'Spending', value: 400, color: "tomato" },
        { name: 'Selling', value: 600, color: "yellowgreen" },
        { name: 'Other', value: 120, color: "black" },
    ];

    return (
        <div className='pieChart'>
            <h3>Leads by Source</h3>
            <ResponsiveContainer width="99%" height={300} >
                <PieChart>
                    <Tooltip
                        contentStyle={{ background: "white", borderRadius: "5px" }}
                    />
                    <Pie
                        data={data}
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                    </Pie>

                </PieChart>
            </ResponsiveContainer>
            <div className="options">
                {
                    data.map((item) => (
                        <div className="option" key={item.name}>
                            <div className="title">
                                <div className="dot" style={{ backgroundColor: item.color }} />
                                <div className="name">{item.name}</div>
                            </div>
                            <div className="value">
                                {item.value}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PieChartBox
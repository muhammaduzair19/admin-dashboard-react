import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './BarChartBox.css'

function BarChartBox() {

    const data = [
        {
            name: 'January',
            buying: 9000,
            selling: 1600,
            earning: 7000
        },
        {
            name: 'Feburary',
            buying: 9000,
            selling: 1600,
            earning: 5810,
        },
        {
            name: 'March',
            buying: 9000,
            selling: 1600,
            earning: 8090,
        },
        {
            name: 'April',
            buying: 9000,
            selling: 1600,
            earning: 6000,
        },
        {
            name: 'May',
            buying: 9000,
            selling: 1600,
            earning: 3401,
        },
        {
            name: 'June',
            buying: 9000,
            selling: 1600,
            earning: 5000,
        },
        {
            name: 'July',
            buying: 9000,
            selling: 1600,
            earning: 10000,
        },
    ];


    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                    <Tooltip
                        contentStyle={{ background: "#2a3447", borderRadius:"5px" }} 
                        labelStyle={{display:"none"}}
                    />
                    <Bar dataKey="earning" fill="gray" />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default BarChartBox
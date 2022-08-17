import { React, useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts'

export default function DoughnutChart({ values }) {
    const data = [
        { name: 'Active', value: values.data[0] },
        { name: 'Inactive', value: values.data[1] },
        { name: 'Completed', value: values.data[2] }
    ]
    const total = values.data.reduce((a, b) => a + b)
    const [centerLabel, setCenterLabel] = useState(total)
    const [colors, setColors] = useState(['LightSlateGrey', 'LightSlateGrey', 'LightSlateGrey'])

    const onMouseEnter = (_, index) => {
        const newColors = ['Beige', 'BlanchedAlmond', 'Bisque']
        newColors[index] = 'IndianRed'
        setCenterLabel(data[index].value)
        setColors(newColors)
    }

    const onMouseOut = () => {
        console.log(2)
        setColors(['LightSlateGrey', 'LightSlateGrey', 'LightSlateGrey'])
        setCenterLabel(total)
    }
    return (
        <PieChart width={250} height={300} onMouseLeave={onMouseOut}
        >
            <text x='50%' y='30%' textAnchor="middle" dominantBaseline="middle" >{values.title}</text>
            <text x='50%' y='40%' textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '24px', fill: '#EDBE61' }}>{centerLabel}</text>
            <Legend layout='vertical' />
            <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                startAngle={-270}
                endAngle={-630}
                onMouseEnter={onMouseEnter}
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={colors[index]}
                    />
                ))}
            </Pie>
        </PieChart>
    )
}
import React from 'react'
import DoughnutChart from './charts/DoughnutChart'

export default function DashBoard() {
    const values = [{
        title: 'Layouts',
        data: [13, 4, 7]
    },
    {
        title: 'Lists',
        data: [4, 5, 3]
    },
    {
        title: 'Dialogs',
        data: [5, 5, 4]
    }]
    return (
        <>
            <h5 className='mt-5'>Summary</h5>
            < div className='dash d-flex justify-content-evenly' >
                {values.map((item, index) => <DoughnutChart values={item} key={index}  />)}
            </div>
        </>
    )
}
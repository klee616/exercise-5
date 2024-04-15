import styles from './VerticalChart.module.css'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { useEffect, useState } from 'react'

ChartJs.register(
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

export default function VerticalChart() {
    const [chartData, setChartDate] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartDate({
            labels: ["Sun", "Mon", "Tud", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
                latel: 'Sales $',
                data: [Math.random()  * 10000,Math.random()  * 10000,Math.random()  * 10000,Math.random()  * 10000,Math.random()  * 10000,Math.random()  * 10000,Math.random()  * 10000],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)',
            }]
        })
    }, [])
    return (<>
    </>)

}
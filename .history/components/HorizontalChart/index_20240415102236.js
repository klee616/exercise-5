import styles from './VerticalChart.module.css'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { useEffect, useState } from 'react'

ChartJs.register(
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

export default function HorizontalChart() {
    const [chartData, setChartDate] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartDate({
            labels: ["Sun", "Mon", "Tud", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
                label: 'Data 1',
                data: [Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.4)',
            }],
            datasets: [{
                label: 'Data 2',
                data: [Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000],
                borderColor: 'rgb(150, 162, 235)',
                backgroundColor: 'rgba(150, 162, 235, 0.4)',
            }],
            datasets: [{
                label: 'Data 3',
                data: [Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000, Math.random() * 10000],
                borderColor: 'rgb(203, 162, 235)',
                backgroundColor: 'rgba(203, 162, 235, 0.4)',
            }]
        });

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, []);

    return (<>
    <Bar data={chartData} options={chartOptions} style={{width:'500px', height: '300px'}} />
    </>) 

}
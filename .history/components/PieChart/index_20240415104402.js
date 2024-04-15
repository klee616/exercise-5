import styles from './PieChart.module.css'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, ArcElement, Tooltip, Legend } from 'chart.js'
import { useEffect, useState } from 'react'

ChartJs.register(
    CategoryScale, ArcElement, Tooltip, Legend
)

export default function PieChart() {
    const [chartData, setChartDate] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartDate({
            labels: ["Red", "Blue", "Yellow", "Gree ", "Purple", "Orange"],
            datasets: [{
                label: '# of votes',
                data: [Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20],
                borderColor:[
                    'rgb(53, 162, 235)',
                    'rgb(103, 162, 235)',
                    'rgb(153, 162, 235)',
                    'rgb(203, 162, 235)',
                    'rgb(253, 162, 235)',
                    'rgb(303, 162, 235)',

                ],
                backgroundColor: 
                [
                    'rgba(53, 162, 235, 0.4)',
                    'rgba(103, 162, 235, 0.4)',
                    'rgba(153, 162, 235, 0.4)',
                    'rgba(203, 162, 235, 0.4)',
                    'rgba(253, 162, 235, 0.4)',
                    'rgba(303, 162, 235, 0.4)',
                ],
                borderWidth: 1
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
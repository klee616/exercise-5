import styles from './VerticalChart.module.css'
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJs.register(
    CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend
)

export default function VerticalChart(){

}
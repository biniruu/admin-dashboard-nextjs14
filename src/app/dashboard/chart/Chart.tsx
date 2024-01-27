'use client'

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

import styles from './chart.module.css'

import data from 'data/charts/dashedLineChartData'

function Chart() {
  return (
    <div className={styles.container}>
      <h2>weekly recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <XAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart

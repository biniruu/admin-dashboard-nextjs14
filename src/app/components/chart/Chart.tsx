'use client'

import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

import data from './dashedLineChartData'

function Chart() {
  return (
    <div className="h-[28.125rem] rounded bg-bg-soft p-5">
      <h2 className="mb-5 font-extralight text-text-soft">weekly recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <XAxis />
          <Tooltip contentStyle={{ background: '#151c2c', border: 'none' }} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart

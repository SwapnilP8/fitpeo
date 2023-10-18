import React, { Component } from 'react'
import DonutChart from 'react-donut-chart'
class Pie_chart extends Component {
  render() {
    return (
      <div>
        <DonutChart
          data={[
            {
              value: 30,
              label: 'Total New Customers',
            },
            {
              label: '',
              value: 55,
              isEmpty: true,
            },
            {
              label: 'Total New Customers',
              value: 15,
            },
          ]}
        />
      </div>
    )
  }
}
export default Pie_chart

import React, { useState } from 'react';
import Navbar from '../../components/sidebar/Navbar';
import { useBudgets } from '../../contexts/BudgetsContext';
import LineChart from "./LineChart"
import PieChart from "./PieChart"

function Reports() {
  const expenses = useBudgets().expenses
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

  console.log(expenses[0].date.substring(5,7) + "!!!!!!!!!!!")
  let monthTotalExpenses = []
  for(let i = 0; i < months.lenth; i++) {
    let total = 0
    for(let j = 0; j < expenses.length; j++) {
      if(expenses[j].date.substring(5,7) === months[i]) {
        total += expenses[j].amount
      }
    }
    monthTotalExpenses.push(total)
  }
  
  const [data, setData] = useState({
    labels: months,
    datasets: [
      {
        label: "Biến động chi tiêu từng tháng",
        data: monthTotalExpenses,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ]
  })
  

  return (
    <>
      <Navbar />
      <div>
        <div style={{ width: 700 }}>
          <LineChart chartData={data} />
        </div>
        <div style={{ width: 700 }}>
          <PieChart chartData={data} />
        </div>
      </div>
    </>
  );
}

export default Reports;

import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import ViewExpensesModal from "../../components/statistic/ViewExpensesModal"
import BudgetCard from "../../components/statistic/BudgetCard"
import { useState } from "react"
import { useBudgets } from "../../contexts/BudgetsContext"
import Navbar from "../../components/sidebar/Navbar"

function Statistic() {
  // window.localStorage.clear()

  const [viewExpensesModalDate, setViewExpensesModalDate] = useState()
  const { getDateExpenses, getMonth } = useBudgets()
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

  return (
    <>
      <Navbar />
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">STATISTIC</h1>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {months.map(month => {
            const amount = getDateExpenses(month).reduce(
              (total, expense) => total + expense.amount,
              0
            )
            return (
              <BudgetCard
                name={"Tháng " + month}
                amount={amount}
                onViewExpensesClick={() => setViewExpensesModalDate(month)}
              />
            )
          })}
        </div>
      </Container>
      <ViewExpensesModal
        month={viewExpensesModalDate}
        handleClose={() => setViewExpensesModalDate()}
      />
    </>
  )
}

export default Statistic

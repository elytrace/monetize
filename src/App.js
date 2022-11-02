import Container from 'react-bootstrap/Container';
import { Button, Stack } from 'react-bootstrap';
import BudgetCard from './Components/HomeState/BudgetCard';
import UncategorizedBudgetCard from './Components/HomeState/UncategorizedBudgetCard';
import TotalBudgetCard from './Components/HomeState/TotalBudgetCard';
import { useState } from 'react';
import { useBudgets } from './Contexts/BudgetContext';
import AddBudgetModal from './Components/HomeState/AddBudgetModal';
import AddExpenseModal from './Components/HomeState/AddExpenseModal';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [AddExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary" 
            onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
          <Button variant="outline-primary"
            onClick={ openAddExpenseModal } >Add Expense</Button>
        </Stack>

        <div style={{ 
          display:"grid", 
          gridTemplateColumns:"repeat(auto-fill,minmax(300px, 1fr))", 
          gap: "1rem", 
          alignItems: "flex-start"}}
        >
          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount, 0)
            return (
              <BudgetCard 
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max} 
                openAddExpenseClick={(() => openAddExpenseModal(budget.id))}
              />
            )
          })}
          <UncategorizedBudgetCard openAddExpenseClick={openAddExpenseModal} />
          <TotalBudgetCard />
        </div>
      </Container>

      <AddBudgetModal 
        show={showAddBudgetModal} 
        handleClose={() => setShowAddBudgetModal(false)} 
      />
      <AddExpenseModal
        show={showAddExpenseModal} 
        defaultBudgetId={AddExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
    </>
  )
}

export default App;

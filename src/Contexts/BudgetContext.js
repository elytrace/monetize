import React, { useContext, useState } from "react"
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from "../Hooks/useLocalStorage";

const BudgetsContext = React.createContext() 

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized"

export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpenses] = useLocalStorage("expenses", [])

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId == budgetId)
    }

    function addExpense({ description, amount, budgetId }) {
        setExpenses(prevExpense => {
            return [...prevExpense, { id: uuidV4(), description, amount, budgetId }]
        })
    }

    function addBudget({ name, max }) {
        setBudgets(prevBudgets => {
            if(prevBudgets.find(budget => budget.name === name)) {
                return prevBudgets
            }
            return [...prevBudgets, { id: uuidV4(), name, max}]
        })
    }

    function deleteExpense({ id }) {
        setExpenses(prevExpense => {
            return prevExpense.filter(expense => expense.id !== id)
        })
    }

    function deleteBudget({ id }) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }

    return <BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    }}>
        {children}
    </BudgetsContext.Provider>
}
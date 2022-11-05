import { Modal, Stack } from "react-bootstrap";
import { useBudgets } from "../../contexts/BudgetsContext";
import { currencyFormatter } from "../../utils";

export default function ViewExpensesModal({ month, handleClose }) {
    const { getDateExpenses, budgets, getMonth } = useBudgets()
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

    const expenses = getDateExpenses(month)

    return (
        <Modal show={month != null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal" gap="2">
                        <div>Tháng - {month}</div>
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack direction="vertical" gap="3">
                    {expenses.map(expense => (
                        <Stack direction="horizontal" gap="2" key={month}>
                            <div className="me-auto fs-4">{expense.description}</div>
                            <div className="mx-5 fs-5">{expense.date}</div>
                            <div className="fs-5">
                                {currencyFormatter.format(expense.amount)}
                            </div>
                        </Stack>
                    ))}
                </Stack>
            </Modal.Body>
        </Modal>
    )
}
import { Card, Button } from "react-bootstrap"
import { currencyFormatter } from "../../utils"

export default function BudgetCard({
    name, amount, onViewExpensesClick
}) {
    return (
        <Card style={{position:"inherit"}}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-item-baseline fw-normal mb-3">
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormatter.format(amount)}
                    </div>
                </Card.Title>
                <Button onClick={onViewExpensesClick} variant="outline-primary" className = "me-auto">
                    View Expenses
                </Button>
            </Card.Body>
        </Card>
    )
}
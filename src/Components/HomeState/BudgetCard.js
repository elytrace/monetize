import React from 'react'
import { Card } from 'react-bootstrap'
import { currentcyFormatter } from '../../utils'

export default function BudgetCard({ name, amount, max }) {
  return (
    <Card>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between
            align-items-baseline: fw-normal mb-3">
                <div className='me-2'>{name}</div>
                <div className='d-flex align-items-baseline'>
                    {currentcyFormatter.format(amount)}
                    <span> / {currentcyFormatter.format(max)} </span>
                </div> 
            </Card.Title>
        </Card.Body>
    </Card>
  )
}

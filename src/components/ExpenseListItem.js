import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <h4>Description: { description }</h4>
        <p>Amount: { amount }</p>
        <p>Created At: { createdAt }</p>
    </div>
);

export default ExpenseListItem;

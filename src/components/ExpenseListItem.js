import React from 'react';
import expenses from '../selectors/expenses';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h4>Description: { description }</h4>
        <p>Amount: { amount }</p>
        <p>Created At: { createdAt }</p>
        <button onClick={ () => { dispatch(removeExpense({id})) } }>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);

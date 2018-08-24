import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem', () => {
    //const wrapper = shallow(<ExpenseListItem expense={ expenses[1].id} description= {expenses[1].description} amount={expenses[1].amount} createdAt={expenses[1].createdAt} />);
    const wrapper = shallow(<ExpenseListItem { ...expenses[0] } />);
    expect(wrapper).toMatchSnapshot();
}); 

import React from "react";
import ExpenseItem from './ExpenseItem';
import { AppContext } from "../context/AppContext";


const ExpenseList = () => {
    const { expenses } = React.useContext(AppContext);

    return (
        <table className='table'>
            <thead className='thread-light'>
                <tr>
                    <th scope='col1'>Department</th>
                    <th scope='col1'>Allocated Budget</th>
                    <th scope='col1'>Increase by 10</th>
                    <th scope='col1'>Decrease by 10</th>
                    <th scope='col1'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map( expense => (
                    <ExpenseItem
                        id={expense.id}
                        key={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </tbody>
        </table>
    );
};


export default ExpenseList;

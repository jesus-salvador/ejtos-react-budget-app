import React from "react";
import { AppContext } from '../context/AppContext'


const Budget = () => {
    const {
        budget,
        currency,
        dispatch,
        expenses,
    } = React.useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return total += item.cost;
    }, 0);

    function updateBudget(val) {
        if(val > 20000){
            alert('You cannot exceed 20000 on the Budget')
            return
        }
        if(val < totalExpenses) {
            alert(`You cannot reduce the budget value lower than the spending`);
            return
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input
                required='required'
                type='number'
                id='budget'
                step='10'
                min={totalExpenses}
                max='20000'
                value={budget}
                onChange={(event) => updateBudget(event.target.value)}
            />
        </div>
    );
};


export default Budget;

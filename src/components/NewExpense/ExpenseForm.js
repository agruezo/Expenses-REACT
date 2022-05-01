import React, { useState } from 'react';
import './ExpenseForm.css'; 

const ExpenseForm = (props) => {
    // call useState for title, amount, date
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // group multiple states into one object
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    // function to set title entered in form
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        // individual states
        setEnteredTitle(event.target.value);
        // when using multiple state approach
        // setUserInput((prevState) => {

        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };

        // });
    };
    // function to set amount entered in form
    const amountChangeHandler = (event) => {
        console.log(event.target.value);
        // individual states
        setEnteredAmount(event.target.value);
        // when using multiple state approach
        // setUserInput((prevState) => {

        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     };

        // });
    };
    // function to set date entered in form
    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        // individual states
        setEnteredDate(event.target.value);
        // when using multiple state approach
        // setUserInput((prevState) => {

        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     };

        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate.replace(/-/g, '\/')),
        };

        console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler} 
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler} 
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
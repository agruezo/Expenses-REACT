import React from 'react';
// import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    // Demo button
    // const [title, setTitle] = useState(props.title);

    // const [amount, setAmount] = useState(props.amount);

    // const clickHandler = () => {
    //     setTitle('Updated');
    //     console.log(title);
    //     setAmount(0.00);
    // };
    
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">$  {props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
};

export default ExpenseItem;

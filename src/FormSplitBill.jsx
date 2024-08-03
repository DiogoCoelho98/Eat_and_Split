import Button from "./Button.jsx"

import { useState } from "react";

export default function FormSplitBill({ onSelectedFriend, onHandleSplitBill }) {
    const [billValue, setBillValue] = useState(0);
    const [userExpense, setUserExpense] = useState(0);
    const [whoIsPaying, setWhoIsPaying] = useState("friend");

    const paidByFriend = billValue - userExpense;

    function handleSubmit(event) {
        event.preventDefault();

        if (!billValue || !userExpense) return;
        
        onHandleSplitBill(whoIsPaying === "user" ? paidByFriend : -userExpense);

        setBillValue(0);
        setUserExpense(0);
        setWhoIsPaying("friend");
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split the bill with {onSelectedFriend.name}</h2>

            <label>💰Bill Value</label>
            <input type="number" min="0"onChange={event => setBillValue(Number(event.target.value))} value={billValue}/>

            <label>😅Your expense</label>
            <input type="number" min="0" onChange={event => setUserExpense(Number(event.target.value) > billValue ? userExpense : Number(event.target.value))} value={userExpense}/>

            <label>🧑‍🤝‍🧑{onSelectedFriend.name}'s expense</label>
            <input type="text" value={paidByFriend} disabled/>

            <label>Who is paying the bill?</label>
            <select onChange={event => setWhoIsPaying(event.target.value)} value={whoIsPaying}>
                <option value="friend">👌{onSelectedFriend.name}</option>
                <option value="user">😒You</option>
            </select>

            <Button>Split bill</Button>
        </form>
    )
}
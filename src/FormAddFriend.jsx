import Button from "./Button.jsx";

import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(event) {
        event.preventDefault();

        if(!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend = {
            name,
            id,
            image: `${image}?u=${id}`,
            balance: 0
        }

        onAddFriend(newFriend);
        
        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>🧑‍🤝‍🧑Friend Name</label>
            <input type="text" onChange={event => setName(event.target.value)} value={name}/>

            <label>🔗Image URL</label>
            <input type="text" onChange={event => setImage(event.target.value)} value={image}/>

            <Button>Add</Button>
        </form>
    )
}
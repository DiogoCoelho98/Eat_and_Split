export default function Friend({ friend, onHandleSelectedFriend, onSelectedFriend }) {
    const isSelected = onSelectedFriend && friend.id === onSelectedFriend.id;

    return (
        <>
            <li className={isSelected ? "selected" : ""}>
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.name}</h3>

                {friend.balance < 0 && <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>}
                {friend.balance > 0 && <p className="green">{friend.name} owes you ${friend.balance}</p>}
                {friend.balance === 0 && <p className="">You and {friend.name} are even</p>}
            
                <button className="button" onClick={() => onHandleSelectedFriend(friend)}>{isSelected ? "Close" : "Select"}</button>
            </li>
        </>
    )
}
import Friend from "./Friend.jsx";

export default function FriendsList({ friends, onHandleSelectedFriend, onSelectedFriend }) {
    return (
        <div>
            <ul>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend} onHandleSelectedFriend={onHandleSelectedFriend} onSelectedFriend={onSelectedFriend}/>)
                }
            </ul>
        </div>
    )
}
import FriendsList from "./FriendsList.jsx";
import FormAddFriend from "./FormAddFriend.jsx";
import Button from "./Button.jsx"
import FormSplitBill from "./FormSplitBill.jsx";

import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isToggle, setIsToggle] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectFriend] = useState(null);

  function handleToggle() {
    setIsToggle(isToggle => !isToggle);
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setIsToggle(false);
  }

  function handleSelectedFriend(friend) {
    setSelectFriend(current => current?.id === friend.id ? null : friend); //Chain operator to deal with errors (null/undefined)
    setIsToggle(false);
  }

  function handleSplitBill(value) {
      setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend));  
      setSelectFriend(null);
  }

  return (
    <>
    <h1><em>Eat and Split</em></h1>
    <div className="app">

      <div className="sidebar">
          <FriendsList friends={friends} onHandleSelectedFriend={handleSelectedFriend} onSelectedFriend={selectedFriend}/>
          {isToggle && <FormAddFriend onAddFriend={handleAddFriend}/>}
          <Button onHandleToggle={handleToggle}>{isToggle ? "Close" : "Add Friend"}</Button>
      </div>

          {selectedFriend && <FormSplitBill onSelectedFriend={selectedFriend} onHandleSplitBill={handleSplitBill}/>}
    </div>
    </>
  )
}
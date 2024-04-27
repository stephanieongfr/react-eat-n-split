import { useState } from "react";

function App() {
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
  const [friends, setFriends] = useState(initialFriends);

  function onAddFriend() {
    setFriends((e) => e.target.value)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <NewFriendInfo onAddFriend={onAddFriend} />
        <SplitBill />
      </div>
    </div>
  )
}

function FriendsList({ friends }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  function handleClick() {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <img src={friend.image} alt={friend.name} />
          <h2>{friend.name}</h2>
          <p>TBD</p>
          <Button onClick={handleClick}>{isOpen ? "Close" : "Select"}</Button>
        </li> 
      ))}
    </ul>
  )
}

function Button({ onClick, children }) {
  return (
    <button 
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function NewFriendInfo({ name, url, onAddFriend }) {

  return (
    <div>
      <form className="form-add-friend">
          <label htmlFor="name">👭 Friend name</label>
          <input type="text" id="name" value={name} />

          <label htmlFor="imageURL">🌄 Image URL</label>
          <input type="text" id="imageURL" value={url} />
        <Button onAddFriend={onAddFriend}>Add</Button>
      </form>
      <Button>Close</Button>
    </div>
  )
}

function SplitBill() {}

export default App;

import { useState } from "react";
import { content } from "../data/content";

const useWishes = () => {
  const { wishes: wishesContent } = content;
  const [wishes, setWishes] = useState(wishesContent.initialWishes);
  const [newMessage, setNewMessage] = useState("");
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() && newName.trim()) {
      const newWish = {
        id: Date.now(),
        name: newName,
        message: newMessage,
        date: "Baru saja",
      };
      setWishes([newWish, ...wishes]);
      setNewMessage("");
      setNewName("");
    }
  };

  return {
    wishesContent,
    wishes,
    newMessage,
    setNewMessage,
    newName,
    setNewName,
    handleSubmit,
  };
};

export default useWishes;

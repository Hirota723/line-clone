import { useState } from "react";
import { db, auth } from "@/utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!auth.currentUser) {
      console.error("ユーザーが認証されていません。");
      return;
    }

    const { photoURL, uid } = auth.currentUser;

    if (message.trim() === "") {
      // メッセージが空白のみの場合は送信しない
      return;
    }
    const messagesCollection = collection(db, "messages");
    try {
      addDoc(messagesCollection, {
        text: message,
        photoURL,
        uid,
        createdAt: serverTimestamp(),
      });
      setMessage(""); // メッセージを送信後に入力フィールドをクリア
    } catch (error) {
      console.error("メッセージの送信に失敗しました:", error);
    }
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            type="text"
            placeholder="メッセージを入力してください"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  );
};

export default SendMessage;

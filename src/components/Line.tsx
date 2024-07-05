import { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { auth, db } from "@/utils/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import SendMessage from "./SendMessage";

const Line = () => {
  const [messages, setMessages] = useState<DocumentData[]>([]);

  useEffect(() => {
    const messagesCollection = collection(db, "messages");
    const messagesQuery = query(
      messagesCollection,
      orderBy("createdAt"),
      limit(50)
    );

    const unsubscribe = onSnapshot(
      messagesQuery,
      (snapshot: QuerySnapshot<DocumentData>) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div
            key={id}
            className={`msg ${
              uid === auth.currentUser?.uid ? "sent" : "received"
            }`}
          >
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};

export default Line;

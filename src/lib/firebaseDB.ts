import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

// 댓글 추가
export const addComment = async (comment: string) => {
  await addDoc(collection(db, "comment"), {
    content: comment,
    createdAt: new Date(),
  });
};

// 댓글 목록 가져오기
export const getComment = async () => {
  const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

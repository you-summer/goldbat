import { Comment } from "@/types";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

// 댓글 추가
export const addComment = async (comment: string) => {
  await addDoc(collection(db, "comment"), {
    content: comment,
    createdAt: new Date(),
  });
};

// 댓글 목록 가져오기
export const getComment = async (): Promise<Comment[]> => {
  const q = query(collection(db, "comment"));
  const comment = await getDocs(q);

  console.log("docs:", comment.docs);

  const commentList = comment.docs
    .map((item) => {
      const data = item.data();
      console.log("🔥 가져온 데이터22", data);
      return {
        content: data.content,
        createdAt: data.createdAt,
      };
    })
    //최신순으로 정렬
    .toSorted((a, b) => {
      return b.createdAt.toDate() - a.createdAt.toDate();
    });

  return commentList;
};

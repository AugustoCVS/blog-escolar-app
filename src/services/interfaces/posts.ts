import { UserResponseProps } from "./user";

export type PostProps ={
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author: UserResponseProps;
}

export type CreatePostProps = {
  title: string;
  content: string;
}

export type UpdatePostProps = {
  userId: string;
  postId: string;
  title: string;
  content: string;
}
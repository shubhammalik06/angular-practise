import { PostsState } from "src/app/shared/interfaces/common.interface";

export const initialState: PostsState = {
  posts: [
    {
      id: "1",
      title: "Sample title 1",
      description: "Sample Description 1",
    },
    {
      id: "2",
      title: "Sample title 2",
      description: "Sample Description 2",
    },
  ],
};

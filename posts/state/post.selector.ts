import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "src/app/shared/interfaces/common.interface";

const getPostsState = createFeatureSelector<PostsState>("post");

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostsById = createSelector(
  getPostsState,
  (state: any, props: any) => {
    return state.posts.find((post: any) => post.id === props.id);
  }
);

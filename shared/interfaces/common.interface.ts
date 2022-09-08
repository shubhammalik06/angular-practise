export interface CounterState {
    counter : number;
    channelName : string;
}

export interface Post{
    id? : string;
    title : string;
    description : string;
}

export interface PostsState{
    posts : Post[];
}
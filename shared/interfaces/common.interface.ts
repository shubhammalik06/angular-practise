export interface CounterState {
  counter: number;
  channelName: string;
}

export interface Post {
  id?: string;
  title: string;
  description: string;
}

export interface Formdata {
  name: string;
  email: string;
  country: string;
  states: string;
}

export interface Form {
  formData: any;
}

export interface PostsState {
  posts: Post[];
}

export interface SharedState {
  showLoading: boolean;
  errorMessage: string;
}

export interface practise {
  name : string;
  role : [number, string];
}

export enum ROLES {
    ADMIN = 'admin',
    USER = 'user',
    WORER = 'worker'
}
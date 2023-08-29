export interface IUser {
  avatar: string | null;
  name: string;
  status: string | null;
  id: number;
  isChecked: boolean;
  gender: string;
  age: number;
  notions: INotion[] | null;
  consultations: IConsultations[] | null;
  video: IVideo[];
  events: IEvent[];
}

export interface INotion {
  date: string;
  text: string;
  content: string | null;
  id: number;
}

export interface IEvent {
  [key: string]: string;
}

export interface IConsultations {
  date: string;
  time: string;
  text: string;
  content: string;
  status: boolean;
  id: number;
}

export interface IVideo {
  content: string;
  link: string;
  name: string;
  author: string;
  date: string | null;
  id: number;
}

export interface ISelectProps {
  setSelectedUsersArr: (value: IUser[]) => void;
  selectedUsersArr: IUser[];
  isSelect: boolean;
  setIsSelect: (value: boolean) => void;
}

export interface IUserProps {
  setSelectedUsersArr: (value: IUser[]) => void;
  person: IUser;
  isSelect: boolean;
}

export interface IState {
  usersArr: IUser[];
  currentUser: IUser | null;
  selectTab: string;
}

export interface INotionProps {
  notion: INotion;
}

interface IActionUser {
  type: string;
  payload: IUser | null;
}

interface IActionTab {
  type: string;
  payload: string;
}

export type IAction = IActionUser | IActionTab;

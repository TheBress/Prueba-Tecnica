export type User = {
  _id: string;
  avatar: string;
  courses: Course[];
  email: string;
  inscriptionDate: string;
  isOnline: boolean;
  lastName: string;
  name: string;
  phone: string;
  username: string;
};

export type Course = {
  _id: string;
  inscriptionDate: string;
  percentCompleted: number;
  title: string;
  description: string;
};

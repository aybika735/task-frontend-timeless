export interface ICardProps {
    dob: { date: string; age: number };
    login: { salt: number };
    picture: { medium: string };
    name: { title: string; first: string; last: string };
    email: string;
    phone: string;
    date: string;
    location: { city: string; state: string; country: string };
    gender: string;
    age: number;
  }
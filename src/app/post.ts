import { Comm } from './comm'

export class Post {
    userId:number;
    id:number;
    title:string;
    body:string;
    comms:Comm[];
}

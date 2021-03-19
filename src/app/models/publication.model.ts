export interface Publication{
    id:number;
    title:string;
    content:string;
    tags:string;
    previous:number;
    next:number;
    accessLevel:number;
}
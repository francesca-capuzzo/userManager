import { User } from "./user";

export interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//AL POSTO DELL'INTERFACE UTILIZZO LA CLASSE:


// export class Posts {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;

//     constructor(userId: number, id: number, title: string, body: string){
//         this.userId = userId;
//         this.id = id;
//         this.title = title;
//         this.body = body;
//     }

//     get upperTitle(){
//         return this.title.toUpperCase();
//     }
// }

// per istanziarlo non basta chiamare upperTitle() ma ogni oggetto va trasformato in un tipo 'post' --> istanziato con NEW Posts(.....)

// this.posts = [];
// for(const obj of data){
//     const newPost = new Post(obj.userId, obj.id, obj.title, obj.body);
//     this.posts.push(newPost);
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//AL POSTO DELL'INTERFACE E DELLA CLASSE NORMALE, USO UNA CLASSE STATICA CHE NON VA ISTANZIATA:


// export class Posts {
    
//     static upperTitle(post: Posts): string{
//         return post.title.toUpperCase();
//     }
// }

//può essere utile utilizzare una classe statica senza costruttore poichè non andrà istanziato l'oggetto ma solo importato per essere utilizzato!!!
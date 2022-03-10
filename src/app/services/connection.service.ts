import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Address } from '../model/address';
import { Posts } from '../model/posts';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  user?: User;

  constructor(private http: HttpClient) { }

  // fetchUsers(): Promise<Response>{
  //   return fetch('https://jsonplaceholder.typicode.com/users');
  // }


  //DA QUI IN POI USO L'HTTP MODULE --> lo metto nel costruttore e poi scrivo la funzione getUsers
  
//   getUsers(): Observable<User[]>{
//     return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');                      //ritorna un Observable
//     // return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
//     // map(userArray => {
//     //   for (const user of userArray) {
//     //     user.name = user.name.toUpperCase()
//     //   }
//     //   return userArray;
//     // })
//   // );
//  }


 getUsers(): Observable<User[]>{
  return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');                 
 }


 getSingleUser(id: number): Observable<User>{
  return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+id);       
 }
 
 
 getPosts(id: number): Observable<Posts[]>{
   return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts/?userId='+id);
 }


}

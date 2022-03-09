import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})

export class UsersPageComponent implements OnInit {

  users: User[] = []

  constructor(private connServ: ConnectionService) { }  //metto il service nel costruttore e lo chiamo a caso 'connServ di tipo ConnectionService'

  ngOnInit(): void {                                    //nel service gestisco la fetch RESPONSE ma poi i then li gestisco qui per evitare che la chiamata si blocchi
    // this.connServ.fetchUsers()
    // .then(resp => resp.json())
    // .then(jsonArray => this.users = jsonArray);      
    
    //DA QUI IN POI USO LA HTTP CLIENT MODULE --> iniziata nel service
    this.connServ.getUsers().subscribe(userArray => this.users = userArray)
  }

  

}

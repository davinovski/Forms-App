import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../services/save-data.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = [];

  constructor(private saveDataService: SaveDataService, private router: Router) { 
  }

  ngOnInit(): void {
    this.users=this.saveDataService.getAllUsers();
  }

  createUser(){
    this.saveDataService.clearUser();
    this.router.navigate(['step1']);
  }

  deleteUser(index){
    this.saveDataService.delete(index);
  }

  editUser(index){
    this.saveDataService.setPerson(index);
    this.router.navigate(['step1']);
  }

}

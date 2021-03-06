import { Injectable } from '@angular/core';
import { Person } from '../data/models/person.model';
import { Users } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  person: Person = new Person();
  users = Users;

  constructor() { 
  }

  saveStep1(data){
    this.person.FirstName=data.firstName;
    this.person.LastName=data.lastName;
    this.person.ZipCode=data.zipCode;
  }

  saveStep2(data){
    this.person.movies=[];
    data.movies.forEach(movie=>this.person.movies.push(movie));
  }

  getPerson(){
    return this.person;
  }

  setPerson(index){
    this.person=Users[index];
  }

  getAllUsers(){
    return this.users;
  }

  saveUser(){
    var index=Users.findIndex(user=>(user.FirstName==this.person.FirstName && user.LastName==this.person.LastName && user.ZipCode==this.person.ZipCode));
    if(index==-1){
      Users.push(this.person);
    }
    else{
      var person=Users[index];
      this.person.movies.forEach(movie=>{
        if(person.movies.findIndex(m=>m.name==movie.name && m.posterUrl==movie.posterUrl)==-1){
        person.movies.push(movie);
        }
      })
    }
  }

  delete(index){
    Users.splice(index,1);
  }

  clearUser(){
    this.person=new Person();
  }

  checkValidity(){
    return this.person.FirstName=="" && this.person.LastName=="" && this.person.ZipCode=="";
  }
  
}

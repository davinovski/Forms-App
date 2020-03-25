import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveDataService} from '../services/save-data.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  addMoviesForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private saveDataService: SaveDataService) { }

  ngOnInit(): void {
    this.addMoviesForm = this.formBuilder.group({
      movies: this.formBuilder.array([])})
      this.setMovies();
    };

    get movies() {
      return this.addMoviesForm.get('movies') as FormArray;
    }

    addMovieField(){
      this.movies.push(this.formBuilder.group({
        name: ['', Validators.required],
        posterUrl: ['']
      }))
    }

    removeMovie(index){
      this.movies.removeAt(index);
    }

    setMovies(){
      var m=this.saveDataService.getPerson().movies;
      const moviesNewArray = new FormArray([]);
      m.forEach(movie=>{
        moviesNewArray.push(this.formBuilder.group({
            name: [movie.name, Validators.required],
            posterUrl: [movie.posterUrl]
          }))
      });
      this.addMoviesForm.setControl('movies', moviesNewArray)
    }

    goBack(){
      this.saveDataService.saveStep2(this.addMoviesForm.value);
      this.router.navigate(['step1']);
    }

    submitFormTwo(){
      if(this.addMoviesForm.valid && this.movies.length>0){
        this.saveDataService.saveStep2(this.addMoviesForm.value);
        this.saveDataService.saveUser();
        this.router.navigate(['home']);
      }
      else{
        alert("Please fill all the fields!")
      }
    }

  }

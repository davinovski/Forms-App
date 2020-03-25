import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ValidateZipCode } from '../validators/zipcode.validator';
import { Router } from '@angular/router';
import { SaveDataService } from '../services/save-data.service';
import { zipCodeMapper } from '../data/zipCodeMapper';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  ZipCodeMapper = zipCodeMapper;
  firstStep: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private saveDataService: SaveDataService) { }

  ngOnInit(): void {
    this.firstStep = this.formBuilder.group({
      firstName: [this.saveDataService.getPerson().FirstName, [Validators.required]],
      lastName: [this.saveDataService.getPerson().LastName, [Validators.required]],
      zipCode: [this.saveDataService.getPerson().ZipCode]
    });
    this.firstStep.get('zipCode').setValidators([
      Validators.required,
      ValidateZipCode
    ]);
  }
  
  submitFormOne(){
    this.saveDataService.saveStep1(this.firstStep.value);
    this.router.navigate(['/step2']);
  }
  goBack(){
    this.router.navigate(['/home']);
  }


}

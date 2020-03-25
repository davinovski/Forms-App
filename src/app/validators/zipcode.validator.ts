import { AbstractControl } from '@angular/forms';
import { zipCodeMapper } from '../data/zipCodeMapper';


export function ValidateZipCode(control: AbstractControl) {
  if(Object.keys(zipCodeMapper).indexOf(control.value)==-1){
    return { validZipCode: true };
  }
  return null;
}
import { AbstractControl, ValidatorFn } from "@angular/forms";
import { DateExtra } from "../scripts/dateExtra";

export function ValidateBirthday(minAge = 18, maxAge = 100): ValidatorFn  {
  return (control: AbstractControl): {invalidBirthday: true} | null => {
    const value = control.value;
    if(value && value.length >= 10) {
      const year = value.slice(6, 10);
      const month = value.slice(3, 5);
      const day = value.slice(0, 2);
      const date = new DateExtra(`${year}-${month}-${day}`);

      return date.age > minAge && date.age < maxAge ? null : {invalidBirthday: true};
    }
    
    return null;
  }
}
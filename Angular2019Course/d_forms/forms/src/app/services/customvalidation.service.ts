import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { patternValidator: { valid: false } };
    };
  }

  nameValidator(): ValidatorFn {
    return (control: AbstractControl) : { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^[A-Z][a-z]+ [A-Z][a-z]+$',);
      const valid = regex.test(control.value);
      console.log(valid)
      return valid ? null : { nameValidator: { valid: false } }
    }
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl) : { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^\\w+@\\w+\\.\\w{2,3}$',);
      const valid = regex.test(control.value);
      return valid ? null : { emailValidator: { valid: false } }
    }
  }

  phoneValidator(): ValidatorFn {
    return (control: AbstractControl) : { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^\\d{9}');
      const valid = regex.test(control.value);
      return valid ? null : { phoneValidator: { valid: false } }
    }
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl) : { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^[\\w\\d]{3,16}');
      const valid = regex.test(control.value);
      return valid ? null : { passwordValidator: { valid: false } }
    }
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
}
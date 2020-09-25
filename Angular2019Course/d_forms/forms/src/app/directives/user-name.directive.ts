import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { CustomValidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appUserName]',
  providers: [
    { 
      provide: NG_VALIDATORS,
      useClass: UserNameDirective,
      multi: true
    }
  ]
})
export class UserNameDirective implements Validator {

  constructor(private customValidator: CustomValidationService) { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.nameValidator()(control);
  }
}

import { AbstractControl } from "@angular/forms";
import { PACKAGE_ROOT_URL } from "@angular/core/src/application_tokens";

export class PasswordValidator {
  static MatchPassword(abstractControl: AbstractControl) {
    let password = abstractControl.get('password').value;
    let confirmPassword = abstractControl.get('confirmPassword').value;
    if (password != confirmPassword) {
      abstractControl.get('confirmPassword').setErrors({ matchPassword: true})
    } else {
      return null;
    }
  }
}

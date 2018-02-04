import { Injectable } from "@angular/core";


@Injectable()
export class DublicateCheck {
  private mails = ['pesho@abv.bg', 'gosho@abv.bg', 'tosho@abv.bg'];

  calidateMail(mail) {
    if (this.mails.indexOf(mail) === - 1) {
      return true;
    }
    return false;
  }
}
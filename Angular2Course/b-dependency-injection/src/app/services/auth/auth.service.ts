import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  loginAction(payload) {
    return this.httpClient.post('http://localhost:5000/login',
      { username: payload.username, password: payload.password })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  private bixlyUrl = 'https://iostest.bixly.com';

  private authToken = "";

  constructor (private http: HttpClient) {}

  data = {};

  getToken(username, password) {
    let loginInfo = {
      username: username,
      password: password
    }
    return this.http.post(this.bixlyUrl + '/api-token-auth/', loginInfo )
    .map((res: Response) => {
      this.authToken = res.token
      console.log(res.token);
    })
  }

  getData() {
    return this.http.get(this.bixlyUrl + '/messages/', {
      headers: {
        Authorization: 'Token ' + this.authToken
      }
    })
    .map((res: Response) => res)
  }

  getApi() {
    this.getData().subscribe(data => {
      console.log(data)
      this.data = data;
    })
  }
}

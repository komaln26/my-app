import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userAddedSource = new Subject<any>();
  userAdded$ = this.userAddedSource.asObservable();

  addUser(user: any) {
    this.userAddedSource.next(user);
  }
}

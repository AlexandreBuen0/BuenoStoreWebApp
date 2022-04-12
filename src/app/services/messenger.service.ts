import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(produto) {
    this.subject.next(produto);
  }

  getMsg() {
    return this.subject.asObservable()
  }
}

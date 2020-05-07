import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders() {
    return LEADERS;
  }
}

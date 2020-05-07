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

  getLeader(id: String) {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedLeader() {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}

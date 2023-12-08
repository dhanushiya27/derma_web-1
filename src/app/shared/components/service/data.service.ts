import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private searchValueSubject = new BehaviorSubject<string>('');
  // searchValue$ = this.searchValueSubject.asObservable();

  // setSearchValue(value: string): void {
  //   this.searchValueSubject.next(value);
  // }
  private searchValueSubject = new BehaviorSubject('');
  getSearchValueSubject = this.searchValueSubject.asObservable();

  constructor(){}

  setSearchValueSubject(searchValueSubject: string){
    this.searchValueSubject.next(searchValueSubject)
  }

}

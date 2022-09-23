import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  setItem(name: string, value: any): void {
    sessionStorage.setItem(name, JSON.stringify(value));
  }

  getItem(name: string): any {
    return JSON.parse(sessionStorage.getItem(name));
  }

  removeItem(name: string): void {
    sessionStorage.removeItem(name);
  }

  getStorage(): any {
    const obj = {};
    
    for(let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);

      obj[key] = this.getItem(key);
    }
    
    return obj;
  }
}

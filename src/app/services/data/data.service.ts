import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/ui-kit/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: StorageService) {
    // this.setName('Alisa');
  }

  getName(): string {
    return this.storage.getItem('name');
  }

  setName(name: string): void {
    this.storage.setItem('name', name)
  }

  // sayHi(): void {}
}

import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  

  constructor(private data: DataService) { }
}

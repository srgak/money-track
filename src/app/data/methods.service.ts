import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {


  constructor(private store: StorageService, private data: DataService) { }

  
}

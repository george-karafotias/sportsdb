import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchStorageService {

  searchText: string = '';
  searchResults: any[];

  constructor() { }
}

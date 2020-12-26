import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchText: string = '';

  @Input() initialValue: string = '';

  @Output() searchButtonPressed: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.searchText = this.initialValue;
  }

  search() {
    if (this.searchText.length >= 3) {
      this.searchButtonPressed.emit(this.searchText);
    }
  }

}

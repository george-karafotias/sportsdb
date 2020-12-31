import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchText: string = '';

  @Input() initialValue: string = '';
  @Input() placeHolder: string = 'Enter at least 3 characters and hit enter or the submit button..';
  @Input() autoCompleteMode: boolean = false;

  @Output() inputUpdated: EventEmitter<string> = new EventEmitter();
  @Output() searchButtonPressed: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.searchText = this.initialValue;
  }

  search() {
    if (!this.autoCompleteMode) {
      if (this.searchText.length >= 3) {
        this.searchButtonPressed.emit(this.searchText);
      }
    }
  }

  filter() {
    if (this.autoCompleteMode) {
      this.inputUpdated.emit(this.searchText);
    }
  }

}

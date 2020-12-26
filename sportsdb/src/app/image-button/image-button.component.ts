import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.css']
})
export class ImageButtonComponent implements OnInit {

  @Input() id: string = '';
  @Input() text: string = '';
  @Input() image: string = '';

  @Output() imageButtonPressed: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buttonPressed() {
    this.imageButtonPressed.emit(this.id);
  }

}

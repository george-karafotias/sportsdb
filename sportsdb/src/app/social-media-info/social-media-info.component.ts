import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-info',
  templateUrl: './social-media-info.component.html',
  styleUrls: ['./social-media-info.component.css']
})
export class SocialMediaInfoComponent implements OnInit {

  @Input() entity: any;

  constructor() { }

  ngOnInit() {
  }

  private isNotEmpty(str: string): boolean {
    return (str && str.trim().length > 0);
  }

  isSocialMediaAvailable(): boolean {
    return (this.entity && (this.isNotEmpty(this.entity.strFacebook) || this.isNotEmpty(this.entity.strTwitter) || this.isNotEmpty(this.entity.strInstagram) || this.isNotEmpty(this.entity.strYoutube)));
  }

}

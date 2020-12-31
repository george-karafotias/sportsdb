import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-social-media',
  templateUrl: './team-social-media.component.html',
  styleUrls: ['./team-social-media.component.css']
})
export class TeamSocialMediaComponent implements OnInit {

  @Input() team: any;

  constructor() { }

  ngOnInit() {
  }

  private isNotEmpty(str: string): boolean {
    return (str && str.trim().length > 0);
  }

  isSocialMediaAvailable(): boolean {
    return (this.team && (this.isNotEmpty(this.team.strFacebook) || this.isNotEmpty(this.team.strTwitter) || this.isNotEmpty(this.team.strInstagram) || this.isNotEmpty(this.team.strYoutube)));
  }
}

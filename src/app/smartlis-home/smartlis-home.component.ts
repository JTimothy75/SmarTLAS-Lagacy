import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandFileService } from '../mod-file/land-file/Shared/land-file.service';

@Component({
  // selector: 'home',
  templateUrl: './smartlis-home.component.html',
  styleUrls: ['./smartlis-home.component.css']
})
export class SmartlisHomeComponent implements OnInit {
  fileData: {}
  constructor(private landfileservice: LandFileService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.fileData = this.landfileservice.getFileDatas()
  }

}

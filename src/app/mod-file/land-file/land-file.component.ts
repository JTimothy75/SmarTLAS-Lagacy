import { Component, OnInit, Input } from '@angular/core';
import { dbfile, LandFileService } from './Shared/land-file.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'land-file',
  templateUrl: './land-file.component.html',
  styleUrls: ['./land-file.component.css']
})
export class LandFileComponent implements OnInit {
  fileData: typeof dbfile[0];
  constructor(
    private landfileservice: LandFileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fileData = this.landfileservice.getFileData(
      +this.route.snapshot.params['id']
    );
  }

  generateCofO(cofoData) {
    this.landfileservice.generateCofO(cofoData).subscribe();
    console.log(cofoData);
  }
}

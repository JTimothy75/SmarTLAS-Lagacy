import { Component, OnInit, Input } from '@angular/core';
import { dbfile, LandFileService } from './../Shared/land-file.service';

@Component({
  selector: 'file-brief',
  templateUrl: './file-brief.component.html',
  styleUrls: ['./file-brief.component.css']
})
export class FileBriefComponent implements OnInit {
  @Input() data: typeof dbfile[0];
  constructor(private landfileservice: LandFileService) {}

  ngOnInit() {}
}

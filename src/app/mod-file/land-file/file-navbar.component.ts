import { Component, OnInit, Input } from '@angular/core';
import { dbfile, LandFileService } from './Shared/land-file.service';

@Component({
  selector: 'file-navbar',
  templateUrl: './file-navbar.component.html',
  styleUrls: ['./file-navbar.component.css']
})
export class FileNavBarComponent implements OnInit {
  @Input() data: typeof dbfile[0];
  constructor(private landfileservice: LandFileService) {}

  ngOnInit() {}
}

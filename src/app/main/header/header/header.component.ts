import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
dropdownbox: any;
headerSelect: any;

  constructor(private sharedService: SharedService) { }
  select: any;
  ngOnInit(): void {
  }

  changeSelect(event: any){
    this.headerSelect= event.target.value;
    console.log(event.target.value);
    this.sharedService.sendheaderSelect(this.headerSelect)
    
  }
}

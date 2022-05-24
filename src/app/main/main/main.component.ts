import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  Rupee: any
  select: any;
  convertedOutput: any;
  mainHeader: any
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  changeSelect(event: any)
  {
        this.select=event.target.value
        console.log(event.target.value)
  }



  currenyconversion(){

    this.mainHeader=this.sharedService.receiveHeader()
    console.log(this.mainHeader)

if(this.mainHeader == "USdollars"){
this.convertedOutput= this.Rupee*0.012905832 + "  US $";
console.log(this.convertedOutput)
}
if(this.mainHeader == "Euros"){
  this.convertedOutput= this.Rupee*0.012026478 + "  Euros";
  console.log(this.convertedOutput)
  }
if(this.mainHeader == "Yen"){
    this.convertedOutput= this.Rupee*1.6367869  + "  Yen";
    console.log(this.convertedOutput)
    }
if(this.mainHeader == "GBP"){
      this.convertedOutput= this.Rupee*0.010302041 + "  GBP";
      console.log(this.convertedOutput)
      }
            

  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginform:any;
  email: any;
  password: any;
  loginVar2= "/main"
  
  loginEmail:any
  loginPassword: any;
  constructor(private router: Router, private sharedService: SharedService) { }
  
  
  ngOnInit(): void {
    this.loginform= new FormGroup({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])

      
    })
  }
  
Login(){
this.loginEmail=(this.sharedService.receiveEmail())
this.loginPassword=(this.sharedService.receivePassword())
if(this.loginform.get('email').value == this.loginEmail && this.loginform.get('password').value==this.loginPassword){
  console.log("Login Succesful")
  this.router.navigate(['/main'])
  }else{
     alert('Invalid Username & password')
  }

  //console.log(this.loginform.get('email').value)
 // console.log(this.loginform.get('password').value)
 // console.log(this.loginEmail)
}


}



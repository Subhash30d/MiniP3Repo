import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  loginVar="/login";
  registerform: any
localStorage: any
usersList:any={}
  
  constructor(private sharedservice: SharedService) { }

  ngOnInit(): void {

    

    this.registerform = new FormGroup({
      f_name: new FormControl("",[Validators.required, Validators.minLength(6),Validators.pattern("^[a-zA-Z ]*$")]),
      l_name: new FormControl("",[Validators.required, Validators.minLength(1),Validators.pattern("^[a-zA-Z ]*$")]),
      email: new FormControl("",[Validators.required, Validators.minLength(6)]),
      PhonecountryCode: new FormControl("",[Validators.required, Validators.minLength(6),]),
      PhoneNumber: new FormControl("",[Validators.required, Validators.minLength(6),Validators.pattern('[6-9]\\d{9}')]),
      password: new FormControl("",[Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl("",[Validators.required, Validators.minLength(6)]),
      address: new FormControl("",[Validators.required, Validators.minLength(6)])
    })


    
      
  }
  register(){

    if(this.registerform.get('password').value == this.registerform.get('confirm_password').value){
      console.log("Authorization successful")
      console.log(this.registerform)
      console.log(this.registerform.value)
      console.log(this.registerform.get('f_name').value)
      this.usersList=Object.assign(this.usersList,this.registerform.value)
      localStorage.setItem('users',JSON.stringify(this.usersList))
      console.log(this.usersList.email)
      this.sharedservice.sendMessage(this.usersList.email, this.usersList.password)
      
    }else{
      window.alert('Invalid Autherization')
    }


}

}

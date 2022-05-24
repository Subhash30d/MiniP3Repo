import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit{
  [x: string]: any;
l_email: any //receiving  at login
r_email:any //sending from authentication
r_password:any; //sending from authentication
l_password:any; //receiving  at login
r_header: any; //sending from header
m_header:any; //receiving  at main
  constructor() { }


  ngOnInit(): void {
    
  }

  sendMessage(send_email:any , send_password:any){
    ((send_email !=null && send_email !==undefined))? this.r_email = send_email: null;
       this.r_email=send_email;
  

     ((send_password !=null && send_password !==undefined))? this.r_password = send_password: null;
this.r_password=send_password;
console.log(this.r_email, this.r_password )

      
    }
  

//if(s_email !== null && s_email!==undefined){
//this.l_email=s_email;
//console.log(s_email)
//} else{
  //this.l_email=null


receiveEmail(){
 return this.l_email=this.r_email;
}

receivePassword(){
  return this.l_password=this.r_password;
}


sendheaderSelect(send_header:any){
  this.r_header=send_header;
}

receiveHeader(){
  return this.m_header=this.r_header

}

}






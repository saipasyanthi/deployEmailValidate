import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import{NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  
  title = 'Employee Sign Up Form';
  email: any;
  phoneno: any;
  username: any;
  loading = false;
  constructor(private route: ActivatedRoute,
    private router: Router){}

  Register(myForm: NgForm ){

    console.log(JSON.stringify(myForm.value));
    this.loading = true;
    setTimeout(() => {
     // alert(JSON.stringify(myForm.value));
      this.router.navigate(['/home',myForm.value.username]); 
   }, 3000);
   // alert(JSON.stringify(myForm.value));   
     // this.router.navigate(['/home',myForm.value.username]); 
       
      //   console.log(JSON.stringify(myForm.value));
        
           }

}





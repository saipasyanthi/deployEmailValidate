import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,    
  ]);

  matcher = new MyErrorStateMatcher();

  
  title = 'Employee Sign Up Form';
  email: any;
  phoneno: any;
  username: any;
  loading = false;
  constructor(private route: ActivatedRoute,
    private router: Router){}

  Register(myForm: NgForm ){

    console.log(JSON.stringify(myForm.value));
    console.log(JSON.stringify(this.emailFormControl.value));
    this.loading = true;
    setTimeout(() => {
     // alert(JSON.stringify(myForm.value));
      this.router.navigate(['/home',myForm.value.username]); 
   }, 3000);
        
           }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




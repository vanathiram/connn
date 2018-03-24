import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormPoster } from '../services/form-poster.service';
import { NgForm} from '@angular/forms';
import {RecaptchaModule, RECAPTCHA_SETTINGS} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  providers:[
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { 
        siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      } 
    },
  ],
})
export class HomeComponent {

  model = new Contact('', '', '', '','default',''); // new Lead('x','y','x.y@test.com','1321432');
  isVisible: string = 'true';
   hasSubjectError = false;
   submitted=false;
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
   mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 

    grecaptcha: any;

   resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}


   validateSubject(value){
     if (value === "default")
     this.hasSubjectError = true;
     else
     this.hasSubjectError = false;
   }

 constructor(private _route: ActivatedRoute,
              private formPoster: FormPoster) {

 }

 onSubmit(contactForm: NgForm){
  this.submitted = true; 
   console.log(this.model);
   this.validateSubject(this.model.subject);
   if(this.hasSubjectError)
   return;
   

   //this.formPoster.postContactForm(this.model);
   //.subscribe(
   //  data=>console.log('success:',data),
   //  err =>console.log('error',err)
   //)

 }

 

 

 
 
 nameToUppercase(value: string, field: string) {
   if (value.length > 0) {
     if (field == "firstName") {
       this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
     }
     else if (field == "lastName") {
       this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
     }
   }
   else {
     if (field == "firstName") {
       this.model.firstName = value;
     } else if (field == "lastName") {
       this.model.lastName = value;
     }
   }
 }
}

export class Contact {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public mobile: string,
    public subject: string,
    public declarativeFormCaptchaValue: string
  ) {

  }
}

import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import { Contact} from '../home/home.component';
import 'rxjs/Rx';
//import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http/src/base_request_options';
//import { Observable } from 'rxjs/Rx';

@Injectable()
export class FormPoster{

    constructor(private http: Http){

    }
    //private extractData(res:Response){
     //   let body=res.json();
     //   return body.fields || {};

    //}
    //private handleError(error: any){
     //   console.error('post error:',error);
     //   return Observable.throw(error.statusText);
    //}

postContactForm(contact: Contact){
//:Observable<any>{
   // let body = JSON.stringify(contact);
    //let headers = new Headers({'Content-Type':'application/json'});
    //let options= new RequestOptions({headers: headers});
    // return this.http.post('http://localhost:3100/postcontact',body,options,headers)
    // .map(this.extractData)
    // .catch(this.handleError);
     
    console.log('posting contact:', contact);

}
}
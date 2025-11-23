import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAngularProject';
  name: string = "Dharmaj"
  phone:number= 1234567890;
  email:string="johndoe#email.com";
  role:string ="Admin";
  password:string="********************";
  terms:boolean=true;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent {
  firstName="Manar";
  lastName="Alaa";
  color="red";
  val="";
  num="2"
  myFunction()
  {
    alert(this.firstName);
  }
}



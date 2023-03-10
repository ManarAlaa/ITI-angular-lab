import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';
// import { Student } from '../_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  @Input() std:Student=new Student(0,"",0);
 @Output() onHide:EventEmitter<boolean>=new EventEmitter<boolean>();
 hide(){
    this.onHide.emit(false);

}
}

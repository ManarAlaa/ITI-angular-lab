import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  @Input() inputData: Student = new Student(0,"",0);  
  // std:Student=new Student(0,"",0);
  @Output() onStudentUpdate:EventEmitter<Student>=new EventEmitter<Student>();
  
   save(){
     this.onStudentUpdate.emit(this.inputData );
   }
}

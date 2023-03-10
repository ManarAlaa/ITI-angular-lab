import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {


  // std:Student=new Student(0,"",0);
  // @Output() onStudentSave:EventEmitter<Student>=new EventEmitter<Student>();
  
  //  save(){
  //    this.onStudentSave.emit(this.std);
  //  }
}

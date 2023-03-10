import { ThisReceiver } from '@angular/compiler';
import { Component ,OnInit} from '@angular/core';
import { Student } from 'src/app/_models/student';
// import { StudentService } from 'src/app/_services/student.service';
//dependent
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  //providers:[StudentService]
})
export class StudentListComponent {
 degree=30;
  xyz="a"
  std:Student=new Student(0,"",30);
  stddetails=new Student(0,"",30);
  detailsflag=false;
  updatestd:Student=new Student(0,"",30);

  getId(std:Student)
  {
    this.updatestd=new Student(std.id,std.name,std.age);
   
  }
  update(std:Student){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id==std.id){
        this.students[i].name=std.name;
        this.students[i].age=std.age;
        break;
      }
      
    }

  }
  delete(id:number){
    this.students=this.students.filter(Student => Student.id != id);
  
  }
  Add(std:Student){
    if(std.id.toString().trim()== "") return;
    if(std.name.trim()== "") return;
    if(std.age.toString().trim()== "") return;
    this.students.push(new Student(std.id,std.name,std.age));
  }
  show(id:number){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id==id){
        this.stddetails=this.students[i];
        this.detailsflag=true;
        break;
      }
      
    }
  }
  students:Student[]=[
    new Student(10,"ahmed",20),
    new Student(20,"mohamed",20),
    new Student(30,"aly",30),
    new Student(40,"sara",50),
    new Student(50,"sara",50),

  ];
 
 

}

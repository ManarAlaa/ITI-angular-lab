import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit  {
  depts:Department[]=[];
  // ids=30;
  constructor(public DepartmentService:DepartmentService){
   // this.students=this.studentService.getAll();
  }
  ngOnInit(): void {
    this.depts=this.DepartmentService.getAll();
  }
 
  delete(id: number){
    this.DepartmentService.deleteData(id);
    this.depts=this.DepartmentService.getAll();
  }
 
  update(id:number)
  {
    this.DepartmentService.getDeptById(id);
   
  }
}
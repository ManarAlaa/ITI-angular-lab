import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
   selectedDept:Department=new Department(0,"mar");
   
  private depts:Department[]=[
    new Department(10,"os"),
    new Department(20,"pd"),
    new Department(30,".net"),
  
  ];
  getAll(){
    return this.depts;
  }
  add(dept:Department){
    this.depts.push(new Department(dept.id,dept.name));
    console.log("save inside service");

  }
  getDeptById(id:number):Department|null
  {
    for (let i = 0; i < this.depts.length; i++) {
      if(this.depts[i].id==id)
      {
      this.selectedDept.id=this.depts[i].id; 
      this.selectedDept.name=this.depts[i].name; 
      return this.depts[i]; 
     }
    }
    return null;
  }
  deleteData(id:number)
  {
   
      this.depts=this.depts.filter(dept => dept.id != id);
  }
  
  updateData(dept:Department)
  {
    for (let i = 0; i < this.depts.length; i++) {
      if(this.depts[i].id==dept.id)
      this.depts[i].name=dept.name;
      
    }
      
  }
  constructor() { }
}

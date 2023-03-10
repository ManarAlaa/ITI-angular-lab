import { Component, OnInit ,OnChanges} from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';
@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit  {

  dept: any = {};
 

  constructor(private departmentService: DepartmentService) { }
  // ngOnChanges()
  // {
  //   

  // }
  ngOnInit() {
    this.getDepartments();
    this.dept=this.departmentService.selectedDept;
  }
  getDepartments() {
    this.departmentService.getAll();
  }
  save(dept:Department)
  {
    this.departmentService.updateData(dept);
  }
}

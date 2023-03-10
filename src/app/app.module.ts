import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { DeleteStudentComponent } from './student/delete-student/delete-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { ListDepartmentComponent } from './department/list-department/list-department.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { UpdateDepartmentComponent } from './department/update-department/update-department.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    StudentListComponent,
    StudentDetailsComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    UpdateStudentComponent,
    ListDepartmentComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

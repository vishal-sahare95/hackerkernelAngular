import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
 form:FormGroup
 constructor(private fb:FormBuilder){
this.form=this.fb.group({
  students:this.fb.array([])
})
 }
 students(){
  return this.form.get('students') as FormArray
 }
 newStudent(){
  return this.fb.group({
    sname:[''],
    courses:this.fb.array([])
  })
 }

 addstudennt(){
  this.students().push(this.newStudent())
 }


 studentCourses(studentINX:number){
  return this.students().at(studentINX).get('couses') as FormArray

 }

 newCourse(){
  return this.fb.group({
    course:[''],
    time:['']
  })
 }
 addStudentCourses(studentINX:number){
  debugger
  this.studentCourses(studentINX).push(this.newCourse())

 }
 onSubmit() {
  console.log(this.form.value);
}
}
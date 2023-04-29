import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public studentArr: any[] = []
  form: FormGroup
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      students: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.addstudent();
    this.addStudentCourses(0)
  }

  students(): FormArray {
    return this.form.get('students') as FormArray
  }

  newStudent(): FormGroup {
    return this.fb.group({
      sname: [''],
      courses: this.fb.array([])
    })
  }

  addstudent() {
    this.students().push(this.newStudent())
  }

  removeEmployee(i: number) {
    this.students().removeAt(i);
  }

  studentCourses(studentINX: number): FormArray {
    return this.students().at(studentINX).get('courses') as FormArray
  }

  newCourse(): FormGroup {
    return this.fb.group({
      course: [''],
      time: ['']
    })
  }
  addStudentCourses(studentINX: number) {
    this.studentCourses(studentINX).push(this.newCourse())
  }

  removeCourses(studentINX: number, couseINX: number) {
    this.studentCourses(studentINX).removeAt(couseINX);
  }

  onSubmit() {
    if (this.form.valid) {
      const sdata = localStorage.getItem('studentdata');
      if (sdata == null) {
        const newstudARR = []
        newstudARR.push(this.form.value)
        localStorage.setItem('studentdata', JSON.stringify(newstudARR))
      }
      else {
        const oldData = JSON.parse(sdata)
        oldData.push(this.form.value)
        localStorage.setItem('studentdata', JSON.stringify(oldData))
        this.form.reset()
      }
    }
  }
}


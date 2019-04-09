import { Component, OnInit } from '@angular/core';
import {User} from '../../User'
import {TaskService} from '../../task.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';;

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user : User;
  public users: User[];
  userForm : FormGroup;
  submitted = false;
  constructor(private _taskService : TaskService,private _router : Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user= this._taskService.getUser();
    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      employeeId: ['', [Validators.required]]
  });

  //getAllUser
  this._taskService.getAllUser().subscribe((res) => {
     this.users=res;
    },(error) => {
      console.log(error);
    })

  }
  get f() { return this.userForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
  }else{
    this.user.fname=this.userForm.value.fname;
    this.user.lname=this.userForm.value.lname;
    this.user.employeeId=this.userForm.value.employeeId;
    console.log(this.user);
    this._taskService.addUser(this.user).subscribe((res) => {
      this._taskService.getAllUser().subscribe((u) => {
        this.users=u;
       });
    console.log(res);
    },(error) => {
      console.log(error);
     
    })
  }
    console.log(this.userForm.value);
  }

}

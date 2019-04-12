import { Component, OnInit } from '@angular/core';
import { Project } from '../../Project';
import { User } from '../../User';
import {TaskService} from '../../task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project : Project;
  users : User[];
  dateCheck : boolean;
  constructor(private _taskService : TaskService,private _router : Router) { }

  ngOnInit() {
    this.project= this._taskService.getproject();
    
    this.dateCheck = false;
  }

  addProject(){
    console.log(this.project);
  }
  searchUser(){
    this._taskService.getAllUser().subscribe((res) => {
      this.users = res;
    },(error) => {
      console.log(error);
    })
  }

}

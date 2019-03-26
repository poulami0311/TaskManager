import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from '@angular/http'
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import {Task} from './Task';
import {ParentTask} from './ParentTask';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  private baseUrl : string ="http://localhost:9090"
  private task = new Task();

  constructor(private _http :Http,private http:HttpClient) { }

  getAllTask() : Observable<Task[]>{
    return this.http.get(this.baseUrl+"/task/getAllTask")
    .pipe(map((response: any) => response));
  }

  addTask(task : Task){
    return this.http.post(this.baseUrl+ '/task/addTask' , task, this.httpOptions)
    .pipe(map((res : Response)=> res));
  }

  deleteTask(id :number){
    return this.http.get(this.baseUrl+"/task/deleteTask/" + id)
    .pipe(map((res : Response)=> res));
  }


  getAllParentTask(): Observable<ParentTask[]>{
    return this.http.get(this.baseUrl+"/task/getAllParentTask")
    .pipe(map((response: any) => response));
  }

//   private extractData(res: Response) {
//     let body = res.json();
//     return body;
//  }

//  private handleError (error: any) {
//   let errMsg = error.message || 'Server error';
//   console.error(errMsg); // log to console instead
//   return Observable.throw(errMsg);
// }

  setTask(task :Task){
    this.task=task;
  }
  getTask(){
    return this.task;
  }
}

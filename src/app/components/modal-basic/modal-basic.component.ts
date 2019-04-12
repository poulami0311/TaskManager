import {Component} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TaskService} from '../../task.service';
import { User } from '../../User';
@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.component.html'
})
export class ModalBasicComponent {
  closeResult: string;
  users : User[];
  constructor(private modalService: NgbModal, private _taskService : TaskService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this._taskService.getAllUser().subscribe((res) => {
      this.users = res;
    },(error) => {
      console.log(error);
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

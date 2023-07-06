import { Component, OnInit } from '@angular/core';
import { ComplaintsService } from 'src/services/complaints.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
})
export class ComplaintsComponent implements OnInit {
  public complaints = [];
  public toggleStatusModal: boolean = false;

  public status: string = '';

  constructor(private _complaintsService: ComplaintsService) {}

  ngOnInit() {}

  setStatus(status: string) {
    this.status = status;
    this.toggleStatusModal = false;
  }

  setStatusModal() {
    this.toggleStatusModal = !this.toggleStatusModal;
  }

  complaintSelected = false;

  toggleComplaintSelected() {
    this.complaintSelected = !this.complaintSelected;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComplaintsService {
  constructor() {}

  getComplaints() {
    return [
      {
        time: '12:43:01pm',
        date: '10/09/2022',
        phoneNumber: '07038485738',
        complaintType: 'Pharmacy',
        rating: '3:2',
        nps: '7',
        status: 'Resolved',
      },
      {
        time: '12:43:01pm',
        date: '10/09/2022',
        phoneNumber: '07038485738',
        complaintType: 'Laboratory',
        rating: '3:2',
        nps: '7',
        status: 'In-Progress',
      },
      {
        time: '12:43:01pm',
        date: '10/09/2022',
        phoneNumber: '07038485738',
        complaintType: 'Emergency Unit',
        rating: '3:2',
        nps: '7',
        status: 'Open',
      },
      {
        time: '12:43:01pm',
        date: '10/09/2022',
        phoneNumber: '07038485738',
        complaintType: 'Cash/Account',
        rating: '3:2',
        nps: '7',
        status: 'In-Progress',
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { TimesheetService } from 'src/app/timesheet.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user!: any[]
  userdata!:any[]
  displayedColumns: string[] = ['users', 'aug01', 'aug02', 'aug03', 'aug04', 'aug05'];
  constructor(public service: TimesheetService) { }

  ngOnInit() {
    this.service.getuser().subscribe(data => {
      this.user = data
    })
    console.log(this.user)
    
  }
  selectitem(event: MatSelectChange) {
    const selectedata = {
    users: event.value
    }
    this.service.getsecuser(selectedata.users).subscribe(data => {
      this.userdata = data
      console.log(data)

    })

   
  }

}

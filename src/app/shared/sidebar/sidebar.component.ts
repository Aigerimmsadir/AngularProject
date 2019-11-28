import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentProfilesComponent } from '../department-profiles/department-profiles.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( public dialog: MatDialog) { }
  openDialog(): void {
    console.log('j')
    const dialogRef = this.dialog.open(DepartmentProfilesComponent, {
      width: '1000px',
      height: '100000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
  }

}

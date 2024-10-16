import {AfterViewInit, Component, ViewChild} from '@angular/core'; 
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any;
  displayedColumns: string[] = [
    'weight', 'firstName', 'lastName', 'email', 'age', 
    'address', 'gender', 'birthDate', 'bloodGroup', 
    'companyName', 'role', 'phone', 'image'
  ];
  constructor(private US: UserService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.US.GetUsers().subscribe((data: any) => {
      this.users = data.users;
      console.log(this.users)
    })
    
  }
  ngAfterViewInit() {
    this.users.paginator = this.paginator;
  }


}

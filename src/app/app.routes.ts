import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { UsersComponent } from './Pages/users/users.component';
import { AddUserComponent } from './Pages/add-user/add-user.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent},
    {path:'AddUser',component:AddUserComponent}
];

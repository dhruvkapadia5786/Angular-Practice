import { Routes } from '@angular/router';

//auth
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

//basic
import { DashboardComponent } from './pages/basic/dashboard/dashboard.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

//guard
import { guestGuard } from './guards/guest.guard';
import { authGuard } from './guards/auth.guard';
import { AboutUsComponent } from './pages/basic/about-us/about-us.component';
import { ContactUsComponent } from './pages/basic/contact-us/contact-us.component';
import { ProductsListComponent } from './pages/fake-api/products-list/products-list.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { AnimationComponent } from './shared/animation/animation.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [guestGuard] },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'user-list',
    component: UsersListComponent,
    // canActivate: [authGuard],
  },
  {
    path: 'file-uploader',
    // loadChildren: () =>
    //   import('./pages/file-upload/file-upload.component').then(
    //     (m) => m.FileUploadComponent
    //   ),'
    component: FileUploadComponent
    // canActivate: [authGuard],
  },
  {
    path: 'animation',
    component: AnimationComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
];

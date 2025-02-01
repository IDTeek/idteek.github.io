import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoftwareComponent } from './software/software.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent }
];

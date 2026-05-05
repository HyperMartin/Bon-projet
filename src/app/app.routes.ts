import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


// Création des routes.

export const routes: Routes = [

{ path: '', component: HomeComponent },
{ path: 'a-propos', component: AboutComponent } ,
{ path: 'produit', component: ProductComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'produit/:id', component: ProductComponent },
{ path: '**', redirectTo: '' }

];

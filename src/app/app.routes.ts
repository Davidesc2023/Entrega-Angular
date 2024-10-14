import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta principal
  { path: 'productos', component: ProductosComponent },  // Ruta para productos
  { path: 'contacto', component: ContactoComponent },  // Ruta para contacto
];

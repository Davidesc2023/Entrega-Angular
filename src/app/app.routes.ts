import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';

// Declara las rutas
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent }
];

// Crea el módulo de enrutamiento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Asegúrate de exportar RouterModule
})
export class AppRoutingModule {}

// ** Asegúrate de exportar routes aquí **
export { routes };

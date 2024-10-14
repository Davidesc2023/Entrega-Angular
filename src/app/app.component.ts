import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-root',
  standalone: true, // Marca como componente independiente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule] // Asegúrate de incluir CommonModule
})
export class AppComponent {
  title = 'Pancolombia';
  showProducts = false; // Estado para mostrar productos
  products = [
    { name: 'Pan Francés', price: 500, image: 'assets/images/pan1.jpeg' },
    { name: 'Baguette', price: 1200, image: 'assets/images/pan2.jpeg' },
    { name: 'Pan de Molde', price: 800, image: 'assets/images/pan3.jpeg' },
    { name: 'Pan de Chocolate', price: 1500, image: 'assets/images/pan4.jpeg' },
    { name: 'Pan de Ajo', price: 1000, image: 'assets/images/pan5.jpeg' },
    { name: 'Pan de Centeno', price: 900, image: 'assets/images/pan6.jpeg' },
    { name: 'Pan Integral', price: 1100, image: 'assets/images/p7.jpeg' },
    { name: 'Pan de Pasas', price: 1300, image: 'assets/images/p8.jpeg' },
    { name: 'Pan de Leche', price: 950, image: 'assets/images/p9.jpeg' },
    { name: 'Pan de Maíz', price: 850, image: 'assets/images/p10.jpeg' }
  ];

  toggleProducts() {
    this.showProducts = !this.showProducts; // Cambia el estado para mostrar u ocultar productos
  }
}

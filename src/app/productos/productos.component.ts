import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  panes = [
    { image: 'assets/images/pan1.jpg', name: 'Pan de Masa Madre', price: 3000 },
    { image: 'assets/images/pan2.jpg', name: 'Pan Integral', price: 2500 },
    { image: 'assets/images/pan3.jpg', name: 'Pan de Ajo', price: 3500 },
    { image: 'assets/images/pan4.jpg', name: 'Pan de Chocolate', price: 4000 },
    { image: 'assets/images/pan5.jpg', name: 'Pan de Centeno', price: 3200 },
    { image: 'assets/images/pan6.jpg', name: 'Pan de Frutas', price: 4500 },
    { image: 'assets/images/pan7.jpg', name: 'Pan de Queso', price: 3800 },
    { image: 'assets/images/pan8.jpg', name: 'Pan de Sourdough', price: 3000 },
    { image: 'assets/images/pan9.jpg', name: 'Pan Dulce', price: 3600 },
    { image: 'assets/images/pan10.jpg', name: 'Pan de Oliva', price: 3700 },
  ];

comprar(pan: any) {
  console.log('Compraste: ', pan);
  
}
}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class DashboardComponent {
  navItems = [
    { path: 'home', icon: 'home', label: 'Home' },
    { path: 'inventario', icon: 'inventory', label: 'Inventario' },
    { path: 'proveedores', icon: 'business', label: 'Proveedores' },
    { path: 'pedidos', icon: 'shopping_cart', label: 'Pedidos' },
    { path: 'ventas', icon: 'point_of_sale', label: 'Ventas' },
    { path: 'facturacion', icon: 'receipt', label: 'Facturación' },
    { path: 'configuracion', icon: 'settings', label: 'Configuración' }
  ];

  logout() {
    // Implementar lógica de cierre de sesión aquí
    console.log('Cerrando sesión...');
    // Normalmente, aquí limpiarías el token de autenticación y redirigirías al login
  }
}
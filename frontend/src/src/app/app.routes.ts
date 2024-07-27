import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeDashboardComponent } from './dashboard/home-dashboard/home-dashboard.component';
import { InventarioComponent } from './dashboard/inventario/inventario.component';
import { ProveedoresComponent } from './dashboard/proveedores/proveedores.component';
import { PedidosComponent } from './dashboard/pedidos/pedidos.component';
import { VentasComponent } from './dashboard/ventas/ventas.component';
import { FacturacionComponent } from './dashboard/facturacion/facturacion.component';
import { ConfiguracionComponent } from './dashboard/configuracion/configuracion.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {  path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component: HomeDashboardComponent },
    { path: 'home', component: HomeDashboardComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'ventas', component: VentasComponent },
    { path: 'facturacion', component: FacturacionComponent },
    { path: 'configuracion', component: ConfiguracionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

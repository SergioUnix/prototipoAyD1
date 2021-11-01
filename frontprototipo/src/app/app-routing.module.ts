import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component'; //importamos componentes
import {PerfilComponent} from './components/perfil/perfil.component';
import {ProductoCrearComponent} from './components/producto-crear/producto-crear.component';
import {ProductoMioComponent} from './components/producto-mio/producto-mio.component';
import {DetalleComponent} from './components/detalle/detalle.component';
import {RegistroClienteComponent} from './components/registro-cliente/registro-cliente.component';
import {CarritoListaComponent} from './components/carrito-lista/carrito-lista.component';
import {ReporteComponent} from './components/reporte/reporte.component';
import {PerfilUpdateComponent} from './components/perfil-update/perfil-update.component';


const routes: Routes = [

  {
    path: '',
    //redirectTo: '/login',
    redirectTo: '/login',
    pathMatch: 'full'
    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
  path: 'productos/agregar',
  component: ProductoCrearComponent
    
  },
  {
  path: 'perfil/productos/modificar/:id',  //modificar producto desde el perfil
  component: ProductoCrearComponent
  },
  {
  path: 'productos/mio/productos/modificar/:id', //modificar producto desde producto-mio
  component: ProductoCrearComponent
  },
  {
  path: 'productos/mio',
  component: ProductoMioComponent      
  },
  {
  path: 'detalle/:id',
  component: DetalleComponent     
  },
  {
  path: 'registro-cliente',
  component: RegistroClienteComponent
  },
  {
  path: 'carrito/:id',
  component: CarritoListaComponent
  },
  {
    path: 'update/:id',
    component: PerfilUpdateComponent
  },
  {
  path: 'reporte/:id',
  component: ReporteComponent
  }
  
  
  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

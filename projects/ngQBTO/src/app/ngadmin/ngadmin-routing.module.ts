import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {
    path:'',
    component:IndexComponent,
    children:[
      {
        path:'user',
        loadChildren:() => import('./user/user.module').then(m => m.UserModule)
      }
    ]

  },

  {
    path:'login',
    loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgadminRoutingModule { }

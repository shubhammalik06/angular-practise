import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveGuard } from 'src/app/Shared/guard/resolve.guard';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'parents',
    loadChildren : () => import('./parent/custom-module.module').then(x=> x.CustomModuleModule)
  },
  {
    path : 'about',
    component : AboutComponent,
    resolve : {
      data : ResolveGuard
    }
  },
  {
    path : '**',
    component : PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 


}

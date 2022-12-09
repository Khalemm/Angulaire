import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './component/shared/main-page/main-page.component';
import { PanierComponent } from './component/panier/panier.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'panier', component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from "./public/public.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  { path: 'editor', component: AdminComponent },
  { path: 'view', component: PublicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

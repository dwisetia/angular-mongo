import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstDataComponent } from './gst-data/gst-data.component';

const routes: Routes = [
  { path: 'input', component: GstAddComponent },
  { path: 'data', component: GstDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

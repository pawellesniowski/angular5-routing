import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ContactComponent } from './pages/contact.component';
import { HomeComponent } from './pages/home.component';
import { NotFoundComponent } from './pages/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMach: 'full'},
  { path: 'contact', component: ContactComponent, pathMach: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

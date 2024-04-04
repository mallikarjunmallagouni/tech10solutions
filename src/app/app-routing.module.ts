import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home | Tech10Solutions' },
  { path: 'about-us', component: AboutUsComponent, title: 'About-us | Tech10Solutions' },
  { path: 'services', component: ServicesComponent, title: 'Services | Tech10Solutions' },
  { path: 'contact-us', component: ContactUsComponent, title: 'contact-us | Tech10Solutions' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

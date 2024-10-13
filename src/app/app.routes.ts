import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainprojectComponent } from './mainproject/mainproject.component';
import { AboutComponent } from './mainproject/about/about.component';
import { BlogComponent } from './mainproject/blog/blog.component';
import { MainComponent } from './mainproject/main/main.component';
import { PortfolioComponent } from './mainproject/portfolio/portfolio.component';
import { ContactComponent } from './mainproject/contact/contact.component';
import { provideRouter, withViewTransitions } from '@angular/router';

// Define your routes
export const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'main', component: MainprojectComponent },
  { path: 'mainSec', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }  // Redirect to 'main' by default
];

// Export the router configuration
export const appRouter = provideRouter(routes, withViewTransitions());

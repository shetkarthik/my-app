import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ProjectComponent } from '../components/project/project.component';
import { TrendvibeComponent } from '../components/trendvibe/trendvibe.component';
import { FundexComponent } from '../components/fundex/fundex.component';
import { CurehubComponent } from '../components/curehub/curehub.component';
import { EcmaComponent } from '../components/ecma/ecma.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'about-me',
        component: AboutComponent,
        pathMatch: 'full'
      },
      {
        path: 'projects',
        component: ProjectComponent,
        pathMatch: 'full'
      },
      {
        path: 'contact-me',
        component: ContactComponent,
        pathMatch: 'full'
      },
      {
        path: 'projects/trendvibe',
        component: TrendvibeComponent,
        pathMatch: 'full'
      },
      {
        path: 'projects/fundex',
        component: FundexComponent,
        pathMatch: 'full'
      },
      {
        path: 'projects/curehub',
        component: CurehubComponent,
        pathMatch: 'full'
      },
      {
        path: 'projects/ecma',
        component: EcmaComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        component: HomeComponent
      }
   

];

import { Routes } from '@angular/router';
import { MainLayout } from '../Components/main-layout/main-layout';
import { Master } from '../Components/master/master';
import { Home } from '../Components/home/home';
import { SignIn } from '../Components/sign-in/sign-in';
import { NotFound } from '../Components/not-found/not-found';
import { Details } from '../Components/details/details';
import { Dashboard } from '../Components/dashboard/dashboard';
import { Signup } from '../Components/signup/signup';

export const routes: Routes = [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
{ path: 'signin', component: SignIn },
{ path: 'signup', component: Signup }, {
        path: '', 
        component:MainLayout,
        children:[
            {path:'home', component:Home},
            {path:'products', component:Master},
            { path: 'dashboard', component: Dashboard },
            { path: 'products/:id', component: Details },
            {path:'', redirectTo:'home',pathMatch:'full'}
        ]
    },
    {path:'**', component:NotFound}

];

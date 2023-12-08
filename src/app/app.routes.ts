import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: 'login',
        loadComponent: () =>
          import('./modules/authManagement/login/login.component')
            .then(m => m.LoginComponent),
      },
    {
        path: 'sampleUI',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./sampleUI/sample-ui/sample-ui.component').then(m => m.SampleUiComponent),
      },
      {
        path:'header',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./core/components/header/header.component').then(m => m.HeaderComponent),
      },
      {
        path:'all-appointment',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/dashboard/allappointment/allappointment.component').then(m => m.AllappointmentComponent),
      },
      {
        path:'form-wizard',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/form-wizard/form-wizard.component').then(m => m.FormWizardComponent),
      },
      {
        path:'document-wizard',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/document-wizard/document-wizard.component').then(m => m.DocumentWizardComponent),
      },
      {
        path:'problems',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/form-wizard/problems/problems.component').then(m => m.ProblemsComponent),
      },
      {
        path:'add-problems',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/form-wizard/problems/add-edit-problems/add-edit-problems.component').then(m => m.AddEditProblemsComponent),
      },
      {
        path:'episodes',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/form-wizard/episodes/episodes.component').then(m => m.EpisodesComponent),
      },
      {
        path:'add-episodes',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/form-wizard/episodes/add-edit-episodes/add-edit-episodes.component').then(m => m.AddEditEpisodesComponent),
      },
      {
        path:'vitals',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/form-wizard/vitals/vitals.component').then(m => m.VitalsComponent),
      },
      {
        path:'add-vitals',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/form-wizard/vitals/add-vitals/add-vitals.component').then(m => m.AddVitalsComponent),
 
      },
      {
        path:'addEdit-Problems',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./modules/form-wizard/problems/add-edit-problems/add-edit-problems.component').then(m => m.AddEditProblemsComponent),
      },
  
];
 
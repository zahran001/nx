import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        loadComponent: () => 
            import ('@nx-demo/feature-dashboard').then(
                (m) => m.FeatureDashboardComponent
            ),
        path: '',
    }
];

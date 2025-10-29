import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { DoclinkView } from './doclink-view/doclink-view';

export const routes: Routes = [
    {
        path: '',
        component: LandingPage,
    },
    {
        path: 'doclinkview',
        component: DoclinkView,
    }
];

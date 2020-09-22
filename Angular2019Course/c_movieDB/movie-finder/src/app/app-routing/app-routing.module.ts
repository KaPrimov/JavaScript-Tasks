import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MoviesComponent } from '../movies/movies.component';

const routes: Routes = [
    {
        path: '',
        component: MoviesComponent,
        pathMatch: 'full'
    },
    {
        path: 'movie/:id',
        component: MovieDetailsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
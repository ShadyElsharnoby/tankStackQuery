import type { Movie } from '../Services/api';

export type MoviesStackNavigator = {
    MoviesList: undefined;
    MovieDetails: { movie: Movie };
};

export interface Movie {
    id: number;
    adult: boolean;
    poster_path: string;
    overview: string;
    release_date: string;
    title: string;
    genres: number[];
    vote_average: number;
}

export interface MovieResponse {
    adult: boolean;
    backdrop_path: string;  
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieResults {
    page: number;
    results: MovieResponse[];
    total_pages: number;
    total_results: number;
}
import {Movie} from "./models";

const apiKey = `66683917a94e703e14ca150023f4ea7c`;
let stage;

export const init = (stageInstance) =>{
    stage = stageInstance;
};

/**
 * @todo:
 * call get with the correct url
 * https://api.themoviedb.org/3/movie/popular
 * and return the data
 */
export const getMovies = async()=> {
    const movies = await get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    const {results = []} = movies;

    if(results.length){
        return results.map((data)=>{
            return new Movie(data);
        });
    }

    return [];
};

export const getSeries = async()=>{
    const series = await get('https://api.themoviedb.org/3/tv/popular?api_key=' + apiKey);
    const {results = []} = series;

    if (results.length) {
        return results.map((data)=>{
            return new series(data);
        });
    }

    return [];
};

const get = (url)=> {
    return fetch(url, {
        'Accept': 'application/json'
    }).then(response => {
        return response.json();
    })
};


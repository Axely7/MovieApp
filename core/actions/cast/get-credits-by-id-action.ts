import { CastResponse } from '../../../infrastructure/interfaces/moviedb-cast.response';
import { movieApi } from '../../api/movie-api';
import { CastMapper } from '../../../infrastructure/mappers/cast.mapper';


export const getCreditsByIdAction = async(id: number | string) => {
    try {
        const {data} = await movieApi.get<CastResponse>(`/${id}/credits`);
        console.log('Cast cargado')
        return data.cast.map(CastMapper.fromTheMovieDBToCast)


    } catch (error) {
        console.log(error)
        throw 'Cannot load now playing movies';
    }

}
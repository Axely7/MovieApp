import { Cast as CastIntern } from '../interfaces/cast.interface';
import { Cast, CastResponse } from '../interfaces/moviedb-cast.response';



export class CastMapper {
    static fromTheMovieDBToCast = (cast: Cast): CastIntern => {

        return {
            id: cast.id,
            name: cast.name,
            avatar: cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : 'https://i.stack.imgur.com/l60Hf.png',
            character: cast.character || ""
        }

    }
}
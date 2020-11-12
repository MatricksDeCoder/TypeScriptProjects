export interface IImage {
    medium: string;
    original:string;
}

export interface IEpisode {
    id: number;
    url: string;
    name: string;
    season: number ;
    number: number;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: string;
    image:IImage;
    summary: string
}

export interface IState {
    episodes: Array<IEpisode> ;
    favorites: Array<IEpisode>;
}

export interface IAction {
    type: string;
    payload: any //Array<IEpisode> | IEpisode;
}

export type DISPATCH = React.Dispatch<IAction>

export interface IPropsEpisodeList {
    toggleFav: (episode: IEpisode) => void;
    toggleText: (episode: IEpisode) => string;
}


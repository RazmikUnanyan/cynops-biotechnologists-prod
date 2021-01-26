import {homeAPI} from "../api/Api";
import {getHomeTitle} from "../helpers";


const SET_HOME_PAGE= 'home/SET_HOME_PAGE';
const SET_HOME_NEWS= 'home/SET_HOME_NEWS';
const SET_ONE_HOME_NEWS= 'home/SET_ONE_HOME_NEWS';

type Heading ={
    title : string
    videoUrl: string
    description:string

}

type InitialState = {
    heading: Heading[]
    news:any,
    oneNews:any
}


let initialState:InitialState ={
    heading:[{
    title : "Nhtnbq запрос на сервер",
    videoUrl: "https://video.nikatv.ru/video/SruTwpDATQ8kQco2cGei",
    description:"Посмотреть интервью"

    }],
    news:[],
    oneNews:[]
};

const homeReducer = (state:InitialState = initialState, action:any):InitialState => {
    switch (action.type) {
        case SET_HOME_PAGE:
            return {
                ...state,
                heading: action.heading
            };
        case SET_HOME_NEWS:
            return {
                ...state,
                news: action.news
            };
        case SET_ONE_HOME_NEWS:
            return {
                ...state,
                oneNews: action.news
            };

        default:
            return state;
    }
};

type HomeHeadingActionType={
    type: typeof SET_HOME_PAGE
    heading: any
}
const setHomeHeading = (heading: any):HomeHeadingActionType => ({type: SET_HOME_PAGE, heading});
const setHomeNews = (news:any) => ({type: SET_HOME_NEWS, news});
const setOneNews = (news: any) => ({type: SET_ONE_HOME_NEWS, news});

export const getHomePage = (setIsLoading: (isLoading: boolean)=>void) => async( Dispatch: any) =>{
    setIsLoading(true);
    try{
        const response = await homeAPI.getHeader();
        Dispatch(setHomeHeading(response));
    }catch (e) {
        throw (e)
    }
    setIsLoading(false);
};
export const getUpdateHomePage = (data: any, setIsLoading: (isLoading: boolean)=>void) => async (Dispatch: any) =>{
    setIsLoading(true);
    try {
        await homeAPI.updateHeader({...data, title: getHomeTitle(data.title)});
        const response = await homeAPI.getHeader();
        Dispatch(setHomeHeading(response));
    } catch (e) {
        throw (e)
    }
    setIsLoading(false)
};
export const getHomeNews = () => async (Dispatch: any) =>{
    try{
        const response = await homeAPI.getNews();
        Dispatch(setHomeNews(response));
    }catch (e) {
        throw (e)
    }
};
export const getOneNews = (id: string) => async (Dispatch: any) =>{
    try{
        const response = await homeAPI.getOneNews(id);
        Dispatch(setOneNews(response));
    }catch (e) {
        throw (e)
    }
};
export const addHomeNews = (news: any) => async(Dispatch: any) =>{
    try{
        const response = await homeAPI.addNews(news);
        Dispatch(setHomeNews(response));
    }catch (e) {
        throw (e)
    }
};

export default homeReducer;


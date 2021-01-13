import {homeAPI} from "../api/Api";
import {getHomeTitle} from "../helpers";


const SET_HOME_PAGE= 'home/SET_HOME_PAGE';
const SET_HOME_NEWS= 'home/SET_HOME_NEWS';
const SET_ONE_HOME_NEWS= 'home/SET_ONE_HOME_NEWS';



let initialState ={
    heading:[{
    title : "Nhtnbq запрос на сервер",
    videoUrl: "https://video.nikatv.ru/video/SruTwpDATQ8kQco2cGei",
    description:"Посмотреть интервью"

    }],
    news:[],
    oneNews:[]
};

const homeReducer = (state = initialState, action) => {
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

const setHomeHeading = (heading) => ({type: SET_HOME_PAGE, heading});
const setHomeNews = (news) => ({type: SET_HOME_NEWS, news});
const setOneNews = (news) => ({type: SET_ONE_HOME_NEWS, news});

export const getHomePage = (setIsLoading) => async Dispatch =>{
    setIsLoading(true);
    try{
        const response = await homeAPI.getHeader();
        Dispatch(setHomeHeading(response));
    }catch (e) {
        throw (e)
    }
    setIsLoading(false);
};
export const getUpdateHomePage = (data, setIsLoading) => async Dispatch =>{
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
export const getHomeNews = () => async Dispatch =>{
    try{
        const response = await homeAPI.getNews();
        Dispatch(setHomeNews(response));
    }catch (e) {
        throw (e)
    }
};
export const getOneNews = id => async Dispatch =>{
    try{
        const response = await homeAPI.getOneNews(id);
        Dispatch(setOneNews(response));
    }catch (e) {
        throw (e)
    }
};
export const addHomeNews = (news) => async Dispatch =>{
    try{
        const response = await homeAPI.addNews(news);
        Dispatch(setHomeNews(response));
    }catch (e) {
        throw (e)
    }
};

export default homeReducer;


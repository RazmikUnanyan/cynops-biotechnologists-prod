import {homeAPI} from "../api/Api";
import {getHomeTitle} from "../helpers";


const SET_HOME_PAGE= 'home/SET_HOME_PAGE';



let initialState ={
    heading:[{
    title : "Nhtnbq запрос на сервер",
    videoUrl: "https://video.nikatv.ru/video/SruTwpDATQ8kQco2cGei",
    description:"Посмотреть интервью"

    }],
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_PAGE:
            return {
                ...state,
                heading: action.heading
            };

        default:
            return state;
    }
};

const setHomePage = (heading) => ({type: SET_HOME_PAGE, heading});

export const getHomePage = (setIsLoading) => async Dispatch =>{
    setIsLoading(true);
    try{
        const response = await homeAPI.getHeader();
        Dispatch(setHomePage(response));
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
        Dispatch(setHomePage(response));
    } catch (e) {
        throw (e)
    }
    setIsLoading(false)
};

export default homeReducer;


import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import HomeIntro from "./HomeIntro";
import {useParams} from "react-router-dom";
import {getHomeNews, getHomePage, getOneNews, getUpdateHomePage} from "../../../state/homeReducer";
import HomeCarousel from "./HomeCarousel";
import Home from "./Home";

const HomeContainer = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {heading, news, oneNews} = useSelector(state => state.homePage);
    const [isEdit, setIsEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        dispatch(getHomePage(setIsLoading));
        dispatch(getHomeNews());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getOneNews(id));
    }, [dispatch, id]);


    const updateHomeHeader = async (data) => {
        dispatch(getUpdateHomePage(data, setIsLoading));
        setIsEdit(false)
    };
    return (
        <>
            {(heading || []).map(h => <HomeIntro updateHomeHeader={updateHomeHeader}
                                                 isEdit={isEdit}
                                                 setIsEdit={setIsEdit}
                                                 heading={h}
                                                 isLoading={isLoading}
                                                 key={h._id}

            />)}
            <HomeCarousel news={news} isAuth={isAuth}/>
            <Home news={oneNews} isLoading={isLoading}/>
        </>

    )
};

export default HomeContainer;

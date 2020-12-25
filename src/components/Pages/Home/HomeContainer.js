import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import HomeIntro from "./HomeIntro";
import videoContent from "../../../assets/img/video_content.mp4";
import narek from "../../../assets/img/narek.jpg";
import {getHomePage, getUpdateHomePage} from "../../../state/homeReducer";
import HomeCarousel from "./HomeCarousel";


const news = [
    {
        id: 1,
        videoReview: videoContent,
        videoUrl: 'https://video.nikatv.ru/video/h4S1cmRTeBVmSQtFFQpW',
        titleHeader: 'Ника ТВ',
        detailsHeading: 'Репортаж',
        titleAuthor: '',
        description: 'Новые технологии калужских инженеров помогут людям с ограниченными возможностями.\n' +
            '                                Нарек Унанян разработал бионический протез руки. Уникальность его в том, что он будет\n' +
            '                                работать как человеческая рука\n' +
        'Модель руки положила начало экспериментам Нарека Унаняна. Он создал уже несколько\n' +
            '                                робо-протезов. У каждого свой принцип работы. Деревянный оживает при натяжении\n' +
            '                                сухожилий, у кибер-модели на каждом пальце свой механизм, который регулирует\n' +
            '                                усилие и скорость движений, а ортопедический обладает максимальным визуальным\n' +
            '                                сходством с человеческой конечностью. Нарек — выпускник Бауманского, математик\n' +
            '                                в институте проблем управления РАН.',
    },
    {
        id: 2,
        videoReview: videoContent,
        videoUrl: 'https://video.nikatv.ru/video/h4S1cmRTeBVmSQtFFQpW',
        titleHeader: 'Ника ТВ',
        detailsHeading: 'Репортаж',
        titleAuthor: '',
        description: 'Новые технологии калужских инженеров помогут людям с ограниченными возможностями.\n' +
            '                                Нарек Унанян разработал бионический протез руки. Уникальность его в том, что он будет\n' +
            '                                работать как человеческая рука\n' +
        'Модель руки положила начало экспериментам Нарека Унаняна. Он создал уже несколько\n' +
            '                                робо-протезов. У каждого свой принцип работы. Деревянный оживает при натяжении\n' +
            '                                сухожилий, у кибер-модели на каждом пальце свой механизм, который регулирует\n' +
            '                                усилие и скорость движений, а ортопедический обладает максимальным визуальным\n' +
            '                                сходством с человеческой конечностью. Нарек — выпускник Бауманского, математик\n' +
            '                                в институте проблем управления РАН.',
    },

];


const HomeContainer = () => {
    const dispatch = useDispatch();
    const heading = useSelector(state => state.homePage.heading);
    const [isEdit, setIsEdit] = useState(false);
    const [isLoading, setIsLoading] =useState(false);

    useEffect(() => {
        dispatch(getHomePage(setIsLoading))
    }, [dispatch]);



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

            />)}
            <HomeCarousel news={news}/>
        </>

    )
};

export default HomeContainer;

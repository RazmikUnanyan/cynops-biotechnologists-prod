import React, { useState } from "react";
import ContentCreator from "../../ContentCreator";
import videoContent from "../../../assets/img/video_content.mp4"

const news = [
    {
        id: 1,
        videoReview: videoContent,
        videoUrl: 'https://nikatv.ru/tv/reportazhi-video/h4S1cmRTeBVmSQtFFQpW',
        titleHeader: 'Interview',
        backgroundColor: '#040919',
        titleAutor: 'Юлия Мигуненко, Илья Алиханов, телекомпания Ника ТВ.',
        detailsHeading: 'Репортаж на Ника ТВ',
        detailsP1: 'Новые технологии калужских инженеров помогут людям с ограниченными возможностями.\n' +
            '                                Нарек Унанян разработал бионический протез руки. Уникальность его в том, что он будет\n' +
            '                                работать как человеческая рука.',

        detailsP2: 'Модель руки положила начало экспериментам Нарека Унаняна. Он создал уже несколько\n' +
            '                                робо-протезов. У каждого свой принцип работы. Деревянный оживает при натяжении\n' +
            '                                сухожилий, у кибер-модели на каждом пальце свой механизм, который регулирует\n' +
            '                                усилие и скорость движений, а ортопедический обладает максимальным визуальным\n' +
            '                                сходством с человеческой конечностью. Нарек — выпускник Бауманского, математик\n' +
            '                                в институте проблем управления РАН.',
    },
]
const About = () => news.map(n => <ContentCreator news={n} key={n.id} />)

export default About;

import React from "react";
import '../../../scss/team.scss'
import PageHeader from "../../common/PageHeader";
import narek from '../../../assets/img/narek.jpg'
import nikita from '../../../assets/img/nikita.jpg'
import Ekaterina from '../../../assets/img/Ekaterina.jpg'
import webDeveloper from '../../../assets/img/webDeveloper.jpg'


const  employers = [{
    id: '1',
    name: 'Нарек',
    position: 'Владелец и руководитель.',
    description: 'Программист центра протезирования',
    about: 'Имею ряд научных статей, выпущенных по всему миру и заявку на патент по алгоритму управления бионическим протезом кисти руки.',
    facebook: '',
    instagram: 'www',
    vk: '',
    youtube: 'ssss',
    img:narek
}, {
    id: '2',
    name: 'Никита',
    position: 'Инженер конструктор.',
    description: 'Конструкторское сопровождение.',
    about: 'Более 4 лет опыта работы в области проектирования микропроцессорных систем.',
    facebook: '',
    instagram: '',
    vk: '',
    youtube: '',
    img: nikita
},{
    id: '5',
    name: 'Екатерина',
    position: 'Координатор.',
    description: 'Работа с персоналом.',
    about: 'Участница множество воркшопов в области менеджмента по всему миру.',
    facebook: '#',
    instagram: 'ссылка',
    vk: '#',
    youtube: 'ссылка',
    img: Ekaterina
},  {
    id: '3',
    name: 'Размик',
    position: 'Web-Инженер.',
    description: 'Разработка Web-приложений.',
    about: 'Играю в тенис.',
    facebook: 'https://www.facebook.com/unanyan.razmik/',
    instagram: 'ссылка',
    vk: 'https://vk.com/id148386786',
    youtube: 'ссылка',
    img: webDeveloper
},];

const Team = () => {


    return (
        <>
            <PageHeader titleFirst='Meet '
                        titleLast='Team'
                        titleRed='Our'
                        description='The reason for success is a good team.'/>
            <section id='main_content'>
                        <section className="wow fadeIn content-details" style={{backgroundColor:'#F9F9F9'}}>
                            <div className="container">
                                <div className="content-header" data-aos="fade-up">
                                    <h2>Знакомьтесь <br/>с нашей<span style={{color:'#f82249'}}> командой.</span></h2>
                                </div>
                            <div className="row">
                                {employers.map((r, i) =>
                                    <div key={r.id} className="col-md-3 m-4">
                                        <div className="card" data-aos="fade-up">
                                            <div className="imgBx">
                                                <img
                                                    src={r.img}
                                                    alt="images"/>
                                            </div>
                                            <div className="details">
                                                <h2>{r.name}<br/><span>{r.position}</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            </div>
                        </section>
            </section>

        </>

    )
};

export default Team;

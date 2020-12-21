import React from "react";
import '../../../scss/about.scss'
import video_about from '../../../assets/img/video_about.mp4'


const About = () => {
    return(
        <section className="wow fadeIn content-details">
            <div className="container about">
                <div className="content-header about" data-aos="fade-down">
                    <h2>РАЗРАБОТКА <span>БИОНИЧЕСКОГО</span> ПРОТЕЗА КИСТИ РУКИ.
                    </h2>
                </div>
                <div className="about_content" data-aos="fade-up">
                    <p>
                        <span>Введение. </span>В современном мире проблема протезирования широко изучается и имеет неоспоримую актуальность.
                        С развитием электроники, робототехники и систем искусственного
                        интеллекта современные бионические протезы конечностей позволяют частично компенсировать
                        функции здоровой конечности. Наиболее популярным способом управления робототехническим
                        процессом является неинвазивный метод, основанный на данных мышечной активности
                        человека. Одним из важнейших требований при проектировании надежного, недорогого и
                        функционального протеза кисти руки является быстрая, простая в реализации и надежная
                        система управления. Установка сенсорных устройств для извлечения информации, может
                        осуществляться несколькими методами, на уровне головного мозга и других супраспинальных
                        областей или периферических нервов, чаще всего сенсорные устройства устанавливают
                        непосредственно на мышцы, которые требуют изучения. Управление сложных коммерческих
                        протезов осуществляется с помощью электрокимографических (ЭМГ) сигналов, записанных с
                        помощью поверхностных электродов, регистрирующих электрическую активность,
                        связанную с мышцами руки пациента, что позволяет интерпретировать намерение субъекта,
                        который действует на руку соответствующим сокращением мышц. Исследование ЭМГ сигнала
                        затрагивает не только область протезирования. Основной целью данной работы является
                        разработка систе</p>
                    <p>
                        <span>Основная часть.</span> Разработка бионического протеза состоит из нескольких этапов. Ниже
                        будут рассмотрены основные этапы более подробно.
                    </p>
                    <p>
                        <span>Описание механической части стенда.</span> Кисть любого человека является манипулятором,
                        в данном случае захватным манипулятором, состоящим из нескольких частей. Каждый палец
                        можно представить как последовательный манипулятор. Один конец цепи, которого закреплен
                        внутри базовой рамы в то время, как другой конец свободен. Следовательно, чтобы манипулировать объектом в пространстве, необходимо описать положение
                        каждого сочленения. По образу и подобию оригинального образца
                        был сконструирован и собран механизм.
                        <video autoPlay muted loop>
                            <source src={video_about} type="video/mp4" className="source"/>
                        </video>
                        При вращении сервопривода рычаг, который закреплён к выходному валу привода, приходит в движение. Что впоследствии приводит в движение весь остальной механизм. Для своего стенда мы
                        используем многорычажный механизм. Такие механизмы удобнее
                        и практичнее в использовании чем механизмы с сухожильными
                        приводными системами. Стоит заметить, что механизм большого
                        пальца немногим отличается от остальных. Это вызвано тем, что у
                        большого пальца есть косая и поперечная мышцы, которые приводят в движение палец относительно кисти руки. Данная модель
                        была изготовлена с использованием 3D технологий. После проведения испытаний на разрыв было принято решение печатать модель с помощью ABS пластика.
                    </p>
                    <p>
                        <span>Описание электронной части стенда.</span> Для реализации алгоритмов управления манипулятором предполагается использова
                        ние микроконтроллера Arduino Nano, схема подключения которого к персональному компьютеру изображена на рис. 2 (дать
                        структурную схему). На персональном
                        компьютере данные с электродов поступают на программную оболочку Matlab,
                        где в дальнейшем производится распознавание сигнала. В дальнейшем, сигналы от
                        пользовательского устройства подаются на
                        механическую часть протеза.<br/><span>Алгоритм распознавания.</span> Распознавание сигналов, поступающих через электромиографические датчики, было решено проводить
                        с помощью искусственной нейронной сети. В данной статье мы рассматриваем два связанных
                        каскадно многослойных персептрона. Оба они имеют один слой с гиперболической сигмоидной передаточной функцией.
                    </p>
                    <p>
                        <span>Заключение.</span> В данной статье был представлен алгоритма распознавания ЭМГ сигнала с использованием ИНС.
                        Предложенный метод был реализован и протестирован на специальном
                        стенде. Было приведено краткое описание стенда. В процессе тестирования ИНС позволяет качественно
                        и быстро произвести идентификацию, исключая ложные срабатывания. В дальней
                        шем предполагается реализация данного алгоритма на базе микроконтроллера для получения
                        автономного устройства.
                    </p>
                    <p>
                        <ul>
                            <li>Подробнее:</li>
                            <li><a href='www'>Статья 1, </a></li>
                            <li><a href='www'>Статья 2, </a></li>
                            <li><a href='www'>Статья 3, </a></li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;

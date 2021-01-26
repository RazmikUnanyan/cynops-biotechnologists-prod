import React from "react";
import '../../../scss/about.scss'


const About:React.FC = () => {
    return(
        <section className="wow fadeIn">
            <div className="container about">
                <div className="content-header about" data-aos="fade-down">
                    <h2>РАЗРАБОТКА <br/><span>ПРОТЕЗА</span> КИСТИ РУКИ.
                    </h2>
                </div>
                <div className="about_content" data-aos="fade-up">
                    <p>
                        В современном мире проблема протезирования широко изучается и имеет неоспоримую актуальность.
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
                        разработка систе
                    </p>
                    <p>
                        <strong> Основная часть.</strong><br/>
                        Разработка бионического протеза состоит из нескольких этапов. Ниже
                        будут рассмотрены основные этапы более подробно.
                    </p>

                    <p>
                        <strong>Описание электронной части стенда.</strong><br/>
                        Кисть любого человека является манипулятором,
                        в данном случае захватным манипулятором, состоящим из нескольких частей. Каждый палец
                        можно представить как последовательный манипулятор. Один конец цепи, которого закреплен
                        внутри базовой рамы в то время, как другой конец свободен. Следовательно, чтобы манипулировать
                        объектом в пространстве, необходимо описать положение
                        каждого сочленения. По образу и подобию оригинального образца
                        был сконструирован и собран механизм.
                        При вращении сервопривода рычаг, который закреплён к выходному валу привода, приходит в движение. Что впоследствии приводит в движение весь остальной механизм. Для своего стенда мы
                        используем многорычажный механизм. Такие механизмы удобнее
                        и практичнее в использовании чем механизмы с сухожильными
                        приводными системами. Стоит заметить, что механизм большого
                        пальца немногим отличается от остальных. Это вызвано тем, что у
                        большого пальца есть косая и поперечная мышцы, которые приводят в движение палец относительно кисти руки. Данная модель
                        была изготовлена с использованием 3D технологий. После проведения испытаний на разрыв было принято решение печатать модель
                        с помощью ABS пластика.
                    </p>
                    <p>
                        Для реализации алгоритмов управления манипулятором предполагается использование
                        микроконтроллера Arduino Nano. На персональном
                        компьютере данные с электродов поступают на программную оболочку Matlab,
                        где в дальнейшем производится распознавание сигнала. В дальнейшем, сигналы от
                        пользовательского устройства подаются на
                        механическую часть протеза.<br/>Алгоритм распознавания. Распознавание сигналов, поступающих через
                        электромиографические датчики, было решено проводить
                        с помощью искусственной нейронной сети. В данной статье мы рассматриваем два связанных
                        каскадно многослойных персептрона. Оба они имеют один слой с гиперболической сигмоидной передаточной функцией.
                    </p>
                    <p>
                        <strong>Заключение.</strong><br/> В данной статье был представлен алгоритма распознавания ЭМГ сигнала с использованием ИНС.
                        Предложенный метод был реализован и протестирован на специальном
                        стенде. Было приведено краткое описание стенда. В процессе тестирования ИНС позволяет качественно
                        и быстро произвести идентификацию, исключая ложные срабатывания. В дальней
                        шем предполагается реализация данного алгоритма на базе микроконтроллера для получения
                        автономного устройства.
                    </p>
                    <p>
                        <ul>
                            <li>Подробнее:</li>
                            <li><a href='https://docviewer.yandex.ru/view/615143964/?*=URnyLVya%2Bz0dQtPeoO7HdguN1F97InVybCI6InlhLWRpc2s6Ly8vZGlzay%2FQntCx0YnQsNGPINC40L3RhNC%2B0YDQvNCw0YbQuNGPINC%2BINCR0LjQvtC%2F0YDQvtGC0LXQt9C40YDQvtCy0LDQvdC40LgvQSBSZWFsLVRpbWUgRmFpbC1TYWZlIEFsZ29yaXRobSBmb3IgRGVjb2Rpbmcgb2YgTXlvZWxlY3RyaWMgU2lnbmFscyB0byBDb250cm9sIGEgUHJvc3RoZXRpYyBBcm0ucGRmIiwidGl0bGUiOiJBIFJlYWwtVGltZSBGYWlsLVNhZmUgQWxnb3JpdGhtIGZvciBEZWNvZGluZyBvZiBNeW9lbGVjdHJpYyBTaWduYWxzIHRvIENvbnRyb2wgYSBQcm9zdGhldGljIEFybS5wZGYiLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjYxNTE0Mzk2NCIsInRzIjoxNjA4NjI4MDA3MzY1LCJ5dSI6IjkzNjA4MTU5NTE1ODQ4ODE2NjQifQ%3D%3D'>
                                A Real-Time Fail-Safe... </a>
                            </li>
                            <li><a href='https://docviewer.yandex.ru/view/615143964/?*=ZyFmT4Vf8ok9pwnso1sQUNCOgVd7InVybCI6InlhLWRpc2s6Ly8vZGlzay%2FQntCx0YnQsNGPINC40L3RhNC%2B0YDQvNCw0YbQuNGPINC%2BINCR0LjQvtC%2F0YDQvtGC0LXQt9C40YDQvtCy0LDQvdC40LgvRGVzaWduIG9mIEFydGlmaWNpYWwgQXJtIFVzaW5nIFJlYWwtdGltZSBNb3Rpb24ucGRmIiwidGl0bGUiOiJEZXNpZ24gb2YgQXJ0aWZpY2lhbCBBcm0gVXNpbmcgUmVhbC10aW1lIE1vdGlvbi5wZGYiLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjYxNTE0Mzk2NCIsInRzIjoxNjA4NjI4ODg5NDU4LCJ5dSI6IjkzNjA4MTU5NTE1ODQ4ODE2NjQifQ%3D%3D'>
                                Design of Artificial...
                            </a></li>
                            <li><a href='https://docviewer.yandex.ru/view/615143964/?*=3bYP1eswy%2FDY3UYXb5UOYzCvMNl7InVybCI6InlhLWRpc2s6Ly8vZGlzay%2FQntCx0YnQsNGPINC40L3RhNC%2B0YDQvNCw0YbQuNGPINC%2BINCR0LjQvtC%2F0YDQvtGC0LXQt9C40YDQvtCy0LDQvdC40LgvU2lnbmFsLUJhc2VkIEFwcHJvYWNoIHRvIEVNRy1TZW5zb3IgRmF1bHQgRGV0ZWN0aW9uIGluIFVwcGVyIExpbWIgUHJvc3RoZXRpY3MucGRmIiwidGl0bGUiOiJTaWduYWwtQmFzZWQgQXBwcm9hY2ggdG8gRU1HLVNlbnNvciBGYXVsdCBEZXRlY3Rpb24gaW4gVXBwZXIgTGltYiBQcm9zdGhldGljcy5wZGYiLCJub2lmcmFtZSI6ZmFsc2UsInVpZCI6IjYxNTE0Mzk2NCIsInRzIjoxNjA4NjI4OTUyNjc0LCJ5dSI6IjkzNjA4MTU5NTE1ODQ4ODE2NjQifQ%3D%3D'>
                                Signal-Based Approach... </a>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;

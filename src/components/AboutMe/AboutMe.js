import student__photo from '../../images/student__photo.jpeg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__heading section__heading">Студент</h2>
            <div className="about-me__description">
                <div className="about-me__description-text">
                    <h3 className="about-me__description-title">Владимир</h3>
                    <p className="about-me__description-subtitle">Фронтенд-разработчик, 41 лет</p>
                    <p className="about-me__description-paragraph">Я родился и живу в России, пивовар.
                                                                   Начинаю свой путь в web-develop.
                                                                   </p>
                    <div className="about-me__description-links">
                        <a href="https://www.facebook.com/vladimir.aksyonov/" target="_blank" rel="noreferrer" className="about-me__description-link">Facebook</a>
                        <a href="https://github.com/Kuggan" target="_blank" rel="noreferrer" className="about-me__description-link">Github</a>
                    </div>
                </div>
                <img src={student__photo} alt="Юлия" className="about-me__description-photo"/>
            </div>
        </section>
    )
}

export default AboutMe;
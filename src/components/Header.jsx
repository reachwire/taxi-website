import {Navigation} from "./Navigation";
import {Button} from "./Button";
import {PhoneButton} from "./PhoneButton";

export const Header = (props) => {
    return (
        <header id='header' className='city_background'>
            <div className='header-nav'>
                <div className='header-container'>
                    <div className='header-logo'>
                        <div className='logo-text'>
                            <a href="#header">Top Taxi</a>
                        </div>
                    </div>
                    <Navigation/>
                    <span className='phone'>(022) 511-200</span>
                </div>
            </div>

            <div className='header-content'>
                <div className='header-content__right'>
                    <div className='header-content__heading'>
                        <h1>Начните работу в такси всего за несколько часов</h1>
                        <p>Станьте водителем одного из надежных таксопарков Кишинева и зарабатывайте уже сегодня</p>
                    </div>
                    <div className='header-content__contact'>
                        <Button text='Оставить заявку' />
                        <PhoneButton href='#' text='Заказать звонок' />
                    </div>
                </div>
            </div>
            <div className='header-wave'>
                <div className='header-taxi'/>
            </div>
        </header>
    )
}
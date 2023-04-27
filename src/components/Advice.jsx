import './Advice.css'

import IconDice from '../assets/images/icon-dice.svg';
import PDividerDesktop from '../assets/images/pattern-divider-desktop.svg';

export const Advice = () => {
    return (
        <div className='advice__container'>
            <div className='advice__id'>advice #117</div>
            <div className='advice__phrase'>
            “It is easy to sit up and take notice, what&apos;s difficult is gettin up and
                taking action.”
            </div>
            <div style={{backgroundImage: `url(${PDividerDesktop})` }} className='advice__divisor_line'></div>
            <button style={{ backgroundImage: `url(${IconDice})` }} className='advice__button' onClick={() => { } }></button>
        </div>
    );
};

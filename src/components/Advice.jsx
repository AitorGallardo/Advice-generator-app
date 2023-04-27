import './Advice.css'

import IconDice from '../assets/images/icon-dice.svg';
import PDividerDesktop from '../assets/images/pattern-divider-desktop.svg';
import { useCreateAdvice } from '../hooks/useCreateAdvice';


export const Advice = () => {
    const [id, advice] = useCreateAdvice();
    return (
        <div className='advice__container'>
            {/* <div className='advice__id'>advice #117</div> */}
            <div className='advice__id'>advice #{id}</div>

            <div className='advice__phrase'>
            {`${advice}`}
            </div>
            <div style={{backgroundImage: `url(${PDividerDesktop})` }} className='advice__divisor_line'></div>
            <button style={{ backgroundImage: `url(${IconDice})` }} className='advice__button' onClick={() => { } }></button>
        </div>
    );
};

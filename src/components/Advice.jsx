import './Advice.css';

import IconDice from '../assets/images/icon-dice.svg';
import PDividerDesktop from '../assets/images/pattern-divider-desktop.svg';

// eslint-disable-next-line react/prop-types
export const Advice = ({ id, advice, reloadAdvice }) => {
  return (
    <div className='advice__container'>
      <div className='advice__id'>advice #{id}</div>

      <div className='advice__phrase'>{`${advice}`}</div>
      <div
        style={{ backgroundImage: `url(${PDividerDesktop})` }}
        className='advice__divisor_line'
      ></div>
      <button
        onClick={reloadAdvice}
        style={{ backgroundImage: `url(${IconDice})` }}
        className='advice__button'
      ></button>
    </div>
  );
};

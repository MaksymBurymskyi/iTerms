import './LanguageSelector.scss';
import React from 'react';

export default function LanguageSelector({ options, currLang, changeOption }) {
  // функція виконує обробку події зміни опцій селектору та зберігає поточний стан опції до стейту
  const handleOptionChange = option => {
    changeOption(option);
  };

  return (
    <div className='langSelector'>
      <select
        value={currLang}
        onChange={ev => handleOptionChange(ev.target.value)}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

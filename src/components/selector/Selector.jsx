import './Selector.scss';

import React, { useState } from "react";


function Selector({ options, label }) {

  // хук використовується для зберігання поточної опції тегу select
  const [currentOption, setCurrentOption] = useState(options[0]);

  // функція виконує обробку події зміни опцій селектору та зберігає поточний стан опції до стейту
  const handleOptionChange = (option) => {
    setCurrentOption(option);
  };

  return (
    <div className="selector">
      <span>{ label }</span>
      <select value={currentOption} onChange={(ev=>handleOptionChange(ev.target.value))}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;

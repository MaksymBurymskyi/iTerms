import './Selector.scss';

function Selector({ options, label, changeOption }) {
  // функція виконує обробку події зміни опцій селектору та зберігає поточний стан опції до стейту
  const handleOptionChange = option => {
    changeOption(option);
  };

  return (
    <div className='selector'>
      <span>{label}</span>
      <select onChange={ev => handleOptionChange(ev.target.value)}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;

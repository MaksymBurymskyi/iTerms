import './Checkpoint.scss';

function Checkpoint({ icon, altIcon, value, descr }) {
  return (
    <div className='checkpoint'>
      <img src={icon} alt={altIcon} />
      <span className='checkpoint__value'>{value}</span>
      <span className='checkpoint__descr'>{descr}</span>
    </div>
  );
}

export default Checkpoint;

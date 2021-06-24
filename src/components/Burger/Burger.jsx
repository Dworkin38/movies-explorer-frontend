const Burger = ({ onClick, isOpen, mix, ...props }) => (
  <div className={`burger ${mix || ''}`} onClick={onClick}>
    <div className={`burger__bar ${isOpen ? 'burger__bar_close' : ''}`}></div>
    <div className={`burger__bar ${isOpen ? 'burger__bar_close' : ''}`}></div>
    <div className={`burger__bar ${isOpen ? 'burger__bar_close' : ''}`}></div>
  </div>
);

export default Burger;

const Navigation = ({ mix, isOpen, ...props }) => (
  <div className={`${isOpen ? 'navigation__overlay' : ''}`}>
    <nav className={`navigation ${mix || ''}`}>{props.children}</nav>
  </div>
);

export default Navigation;

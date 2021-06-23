const MainHeader = ({ mix, ...props }) => (
  <h2 className={`main-header ${mix || ''}`}>{props.children}</h2>
);

export default MainHeader;

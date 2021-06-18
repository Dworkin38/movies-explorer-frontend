const MainHeader = ({ mix, ...props }) => (
  <h2 class={`main-header ${mix || ''}`}>{props.children}</h2>
);

export default MainHeader;

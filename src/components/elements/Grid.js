import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';

const Grid = ({ header, children }) => {
  console.log(children);
  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  );
};

export default Grid;

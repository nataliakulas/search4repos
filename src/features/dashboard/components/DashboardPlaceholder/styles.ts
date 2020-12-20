import styled from 'styled-components';
import color from 'common/styles/colors';

export const StyledDashboardPlaceholder = styled.div`
  width: 100%;
  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${color.blue};
  font-size: 2.1rem;
  text-align: center;

  border-radius: 0.8rem;
  background-color: ${color.white};
  box-shadow: 0 0.2rem 2rem 0 ${color.black + '26'};

  margin: 10rem 0;
  
  span {
    font-size: 1.8rem;
    margin-top: 1.5rem;
`;

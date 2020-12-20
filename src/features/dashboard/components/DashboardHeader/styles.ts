import styled from 'styled-components';
import color from 'common/styles/colors';

export const StyledDashboardHeader = styled.header`
  display: flex;
  align-items: center;

  color: ${color.blue};
  font-size: 2.1rem;
  line-height: 2.4rem;

  margin: 4rem 0;

  span {
    color: ${color.white};
    font-size: 1.4rem;

    background-color: ${color.blue};
    border-radius: 0.8rem;

    padding: 0.2rem 1rem;
    margin-left: 1rem;
  }
`;

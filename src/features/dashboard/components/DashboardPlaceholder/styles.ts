import styled from 'styled-components';
import { PanelMixin } from 'common/styles/mixins';

export const StyledDashboardPlaceholder = styled.div`
  ${PanelMixin};

  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 2.1rem;
  text-align: center;

  margin: 10rem 0;
  
  span {
    font-size: 1.8rem;
    margin-top: 1.5rem;
`;

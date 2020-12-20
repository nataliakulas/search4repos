import styled from 'styled-components';
import { PanelMixin } from 'common/styles/mixins';

export const StyledResultDetails = styled.div`
  ${PanelMixin};

  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.1rem;

  margin: 10rem 0;
`;

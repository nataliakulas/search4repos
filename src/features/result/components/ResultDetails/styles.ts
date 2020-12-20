import styled from 'styled-components';
import color from 'common/styles/colors';
import { PanelMixin } from 'common/styles/mixins';

export const StyledResultDetails = styled.div`
  ${PanelMixin};

  height: 60vh;

  display: flex;
  flex-direction: column;

  font-size: 2.1rem;

  margin: 5rem 0;
  padding: 4rem;
`;

export const StyledResultHeader = styled.header`
  margin-bottom: 2rem;
`;

export const StyledResultDetail = styled.p`
  font-size: 1.4rem;

  span {
    color: ${color.black};
  }
`;

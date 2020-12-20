import { css } from 'styled-components';
import color from 'common/styles/colors';

export const PanelMixin = css`
  width: 100%;

  color: ${color.blue};

  border-radius: 0.8rem;
  background-color: ${color.white};
  box-shadow: 0 0.2rem 2rem 0 ${color.black + '26'};
`;

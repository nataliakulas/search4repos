import styled from 'styled-components';
import color from 'common/styles/colors';
import github from 'common/assets/github.svg';

export const StyledHeader = styled.header`
  height: 6rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  align-items: center;

  color: ${color.white};
  font-size: 2.1rem;
  background-color: ${color.blue};
  background-image: url(${github});
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 20rem center;

  padding: 0 24rem;

  ::selection {
    color: ${color.blue};
    background-color: ${color.white};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

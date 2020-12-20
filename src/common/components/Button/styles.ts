import styled from 'styled-components';
import color from 'common/styles/colors';

export const StyledButton = styled.button`
  width: 10rem;
  height: 4rem;

  color: ${color.white};
  font-size: 1.6rem;
  line-height: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  border: 0.2rem solid ${color.blue};
  border-radius: 2rem;
  background-color: ${color.blue};

  margin: 0 2rem;

  cursor: pointer;

  :hover {
    background-color: ${color.violet};
    border-color: ${color.black};
  }

  :disabled {
    border-color: ${color.grey};
    background-color: ${color.grey};
    cursor: not-allowed;
  }
`;

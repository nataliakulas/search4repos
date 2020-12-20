import styled from 'styled-components';
import color from 'common/styles/colors';

export const StyledFieldset = styled.fieldset`
  width: 100%;

  border: none;
`;

export const StyledInput = styled.input`
  width: calc(100% - 14rem);
  height: 4rem;

  border: 2px solid ${color.blue};
  border-radius: 0.8rem;

  padding: 0 2rem;

  ::placeholder {
    color: ${color.grey};
  }

  :focus {
    border-color: ${color.black};
  }
`;

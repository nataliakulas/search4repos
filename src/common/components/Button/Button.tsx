import { ButtonProps } from './types';
import { StyledButton } from './styles';

const Button = ({ label, submit, ...props }: ButtonProps) => (
  <StyledButton type={submit ? 'submit' : 'button'} {...props}>
    {label}
  </StyledButton>
);

export default Button;

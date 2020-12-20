import { Link } from 'react-router-dom';
import { route } from 'app/Router';
import { StyledHeader } from './styles';

const Header = () => (
  <StyledHeader>
    <Link to={route.dashboard}>Search 4 Repos</Link>
  </StyledHeader>
);

export default Header;

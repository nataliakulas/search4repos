import { StyledDashboardHeader } from './styles';

const DashboardHeader = ({ count }: { count: number }) => (
  <StyledDashboardHeader>
    Results<span>{count}</span>
  </StyledDashboardHeader>
);

export default DashboardHeader;

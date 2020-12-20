import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from 'common/components';
import { StyledFieldset, StyledInput } from './styles';

const DashboardSearch = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledFieldset>
        <StyledInput placeholder="Type repo name" value={value} onChange={handleChange} />
        <Button label="Go!" submit disabled={!value.length} />
      </StyledFieldset>
    </form>
  );
};

export default DashboardSearch;

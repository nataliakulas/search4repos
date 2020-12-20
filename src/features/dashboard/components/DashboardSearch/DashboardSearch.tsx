import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'common/components';
import { searchRequest } from '../../slice';
import { StyledFieldset, StyledInput } from './styles';

const DashboardSearch = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(searchRequest({ q: value }));
  };

  useEffect(() => {
    return () => {
      setValue('');
    };
  }, [dispatch]);

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

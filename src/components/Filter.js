import { useEffect } from 'react';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function Filter({ value, onChange }) {
  // console.log('Filter re-render');

  function handleKeyPress(e) {
    console.log(e.keyCode);
  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <InputGroup mt="5">
      <InputLeftElement color="gray.300">
        <SearchIcon />
      </InputLeftElement>

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Filter contacts"
      />
    </InputGroup>
  );
}

export default Filter;

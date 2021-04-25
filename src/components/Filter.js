import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function Filter({ value, onChange }) {
  return (
    <InputGroup mt="5">
      <InputLeftElement color="gray.300">
        <SearchIcon />
      </InputLeftElement>

      <Input value={value} onChange={onChange} placeholder="Filter contacts" />
    </InputGroup>
  );
}

export default Filter;

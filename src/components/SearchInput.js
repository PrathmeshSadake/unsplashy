import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const InputWithIcon = () => {
  const [input, setInput] = React.useState('');
  const handleSubmit = () => {
    // alert(input);
  };
  return (
    <div class='wrap'>
      <h1>Unsplashy</h1>
      The internet’s source of freely-usable images. Powered by creators
      everywhere.
      <form class='search' onSubmit={handleSubmit}>
        <input
          type='text'
          class='searchTerm'
          placeholder='What are you looking for?'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' class='searchButton'>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default InputWithIcon;

import {useEffect, useRef, useState} from 'react';
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";

export default function InputWithIcon({query}) {

  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value)
    query(input)
  };

  return (
      <>
        <Box
            width={'100%'}
            sx={{
              background: 'url(https://source.unsplash.com/random)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: {xl: '650px', lg: '570px', md: '550px', sm: '550px', xs: '550px'},
              display: 'flex',
              alignItems: 'center',
            }}
        >
          <Container maxWidth={'lg'}>
            <Box p={1} color={'white'} width={'100%'}  display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
              <Box maxWidth={{lg: '700px', md: '600px', sm: '600px', xs: '600px'}}>
                <Box mb={3} fontSize={{lg: '37px', md: '37px', sm: '30px', xs: '25px'}} fontWeight={'600'}>
                    {'Unsplashy'}
                </Box>
                <Box mb={2}>
                  The internet’s source of freely-usable images. Powered by creators everywhere.
                </Box>
                <form className="search" onSubmit={handleSubmit}>
                  <input
                      type="text"
                      className="searchTerm"
                      placeholder="What are you looking for?"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                  />
                  <button type="submit" className="searchButton">
                    <SearchIcon />
                  </button>
                </form>
              </Box>
            </Box>
          </Container>
        </Box>
      </>
  );
}

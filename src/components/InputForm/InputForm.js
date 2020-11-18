import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroll-component';

import '../SearchBar/search-bar.css';
import ImageGrid from '../ImageGrid/ImageGrid';
import accessKey from '../../api/unsplashAccessKey';

function InputForm() {

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
  
    useEffect(()=>{
     getPhotos();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
  
    function getPhotos(){
      let apiUrl = `https://api.unsplash.com/photos?`;
      if(query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;
      apiUrl += `&page=${page}`;
      apiUrl += `&client_id=${accessKey}`; 
  
      fetch(apiUrl)
      .then((res)=>res.json())
      .then((data)=>{
        // data.results is response from query search and data from normal api url
      const imagesFromApi = data.results ?? data;
      if(page===1) setImages(imagesFromApi);
      setImages(images => [...images, ...imagesFromApi])});
    }
  
    
    function handleSearchSubmit(e){
      e.preventDefault();
      setPage(1);
      getPhotos();
    }

    function handleInputChange(e){
        setQuery(e.target.value);
    }
  
    return (
      <div className="app">
        <form onSubmit={handleSearchSubmit} >
          <Input type="text" placeholder="Search Unsplash" onChange={handleInputChange} value={query} />
          <button>Search</button>
        </form>
  
        <InfiniteScroll dataLength={images.length} next={() => setPage((page)=>page + 1)} hasMore={true} loader={<h1>loading...</h1>}>
        <ImageGrid images={images} />
        </InfiniteScroll>
      </div>
    );
  }

export default InputForm;
import React, { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';


import ImageGrid from '../ImageGrid/ImageGrid';
import accessKey from '../../api/unsplashAccessKey';

import './input-form.css';

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
      <div>
        <div className="search-container">
        <form onSubmit={handleSearchSubmit} >
          <Input className="form" type="text" action="search" icon='search' iconPosition='left' placeholder="Search for high-resolution images" onChange={handleInputChange} value={query} />
        </form>
        <h3 className="license">Read more about the  <a href="https://unsplash.com/license">Unsplash License</a></h3>
        </div>
        <ImageGrid images={images} next={() => setPage((page)=>page + 1)}/>
       </div>

    );
  }

export default InputForm;
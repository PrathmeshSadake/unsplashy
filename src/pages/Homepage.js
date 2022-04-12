import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';

import InfiniteScroll from 'react-infinite-scroll-component';
import { Container } from '@mui/material';
import SearchInput from '../components/SearchInput';
let page = 0;

const MasonryImageList = () => {
  const API_KEY = process.env.API_KEY;
  const [imageData, setImageData] = React.useState([]);
  const fetchData = () => {
    page++;
    axios
      .get(`https://api.unsplash.com/photos?page=${page}&client_id=${API_KEY}`)
      .then((res) => {
        setImageData(imageData.concat(res.data))
      })
      .catch((err) => console.error(err));
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  const query = (data) => {
    axios
      .get(`https://api.unsplash.com/search/photos?page=1&client_id=${API_KEY}&query=${data}`)
      .then((res) => {
        setImageData(res.data.results)
      })
      .catch((err) => console.error(err));
  }
  return (
    <InfiniteScroll
      dataLength={imageData.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      //   refreshFunction={refresh}
      //   pullDownToRefresh
      //   pullDownToRefreshThreshold={50}
      //   pullDownToRefreshContent={
      //     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      //   }
      //   releaseToRefreshContent={
      //     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      //   }
    >
      <SearchInput query={query} />
      <Container maxWidth={false} sx={{ paddingTop: '2rem' }}>
        <ImageList variant='masonry' cols={3} gap={15} sx={{ marginY: 0 }}>
          {imageData.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.urls.regular}`}
                alt={item.description}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </InfiniteScroll>
  );
};

export default MasonryImageList;

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";

import InfiniteScroll from "react-infinite-scroll-component";
import { Container, useTheme, useMediaQuery } from "@mui/material";
import SearchInput from "../components/SearchInput";
let page = 0;

const MasonryImageList = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [imageData, setImageData] = React.useState([]);

  // MUI hooks to get breakpoints
  const theme = useTheme();
  const isAboveSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));

  const fetchData = () => {
    page++;
    axios
      .get(`https://api.unsplash.com/photos?page=${page}&client_id=${API_KEY}`)
      .then((res) => {
        setImageData(imageData.concat(res.data));
      })
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const query = (data) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&client_id=${API_KEY}&query=${data}`
      )
      .then((res) => {
        setImageData(res.data.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <InfiniteScroll
      dataLength={imageData.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
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
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: isAboveMd ? "80vh" : isAboveSm ? "60vh" : "50vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Container
          maxWidth={true}
          sx={{
            backgroundColor: "red",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <SearchInput query={query} />
        </Container>
      </Container>

      <Container maxWidth={false} sx={{ paddingTop: "2rem" }}>
        <ImageList
          variant="masonry"
          cols={isAboveSm ? 3 : 2}
          gap={15}
          sx={{ marginY: 0 }}
        >
          {imageData.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.urls.regular}`}
                alt={item.description}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </InfiniteScroll>
    // <Box sx={{ width: 500, height: 450 }}>
    // <ImageList variant='masonry' cols={4} gap={8} sx={{ marginY: 0 }}>
    //   {imageData.map((item) => (
    //     <ImageListItem key={item.id}>
    //       <img
    //         src={`${item.urls.regular}`}
    //         alt={item.description}
    //         loading='lazy'
    //       />
    //     </ImageListItem>
    //   ))}
    // </ImageList>
    // </Box>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

export default MasonryImageList;

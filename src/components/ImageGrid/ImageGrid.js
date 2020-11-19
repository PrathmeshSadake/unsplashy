import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import './image-grid.css';
import './loader.css';

class ImageGrid extends React.Component{
    render(){
        return(
         <div className="grid-container">
          <InfiniteScroll style={{overflow: 'hidden'}} dataLength={this.props.images.length} next={this.props.next} hasMore={true} loader={<div className="loader"><div class="loadingio-spinner-dual-ball-7vhy8l1xg7t"><div class="ldio-9ro5rlpgzop">
<div></div><div></div><div></div>
</div></div></div>}>
          <div className="image-grid">
          {this.props.images.map((image, index) => (
            <div className="image">
              <a key={index} href={image.links.html} target="_blank" rel="noopener noreferrer" >
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
            </div>
          ))}
          
          </div>
          </InfiniteScroll>
         </div>
        )
    }
}

export default ImageGrid;
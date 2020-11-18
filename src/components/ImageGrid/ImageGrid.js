import React from 'react';

class ImageGrid extends React.Component{
    render(){
        return(
            <div>
                <div className="image-grid">
          {this.props.images.map((image, index) => (
            <a className="image" key={index} href="image.links.html" target="_blank" rel="noopener noreferrer" >
              <img src={image.urls.regular} alt={image.alt_description} />
            </a>
          ))}
        </div>
            </div>
        )
    }
}

export default ImageGrid;
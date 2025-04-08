import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeDetailsComponent() {
  return (
    <div>
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/image1.jpg" alt="First slide" style={{ height: '500px', objectFit: 'cover' }}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/image2.jpg" alt="Second slide" style={{ height: '500px', objectFit: 'cover' }}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/image3.jpg" alt="Third slide" style={{ height: '500px', objectFit: 'cover' }}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/image4.jpg" alt="Fourth slide" style={{ height: '500px', objectFit: 'cover' }}/>
        </Carousel.Item>
      </Carousel>

      {/* Scrolling Details Section */}
      <div className="scrolling-details mt-4" style={{ overflowY: 'auto', maxHeight: '500px' }}>
        <div className="detail-item">Detail 1: Community Events and Gatherings</div>
        <div className="detail-item">Detail 2: Resources for Learning and Growth</div>
        <div className="detail-item">Detail 3: Networking Opportunities</div>
        <div className="detail-item">Detail 4: Support Groups and Forums</div>
        <div className="detail-item">Detail 5: Volunteering and Social Impact</div>
      </div>
    </div>
  );
}

export default HomeDetailsComponent;
import './Gallery.css'

export default function Gallery() {
    // Array of image URLs
    const kidsUrls = [
        '/services/dealerships.jpg',
        '/services/education.jpg',
        '/services/fitness.jpg',
        '/services/government.jpg',
        '/services/health.jpg',
        '/services/offices.jpg',
        '/services/venues.jpg',
        '/services/worship.jpg'
    ];

    // Function to render images
    const renderKids = () => {
        return kidsUrls.map((url, index) => (
            <div>
                <img className="kidsImages" key={index} src={url} alt={`Image ${index + 1}`}/>
                <h2 style={{textAlign: 'left'}}>Test</h2>
            </div>
        ));
    };

  return (
    <div style={{width: '70vw'}}>
        <h2 style={{fontWeight: '900', fontSize: '2.3em'}}>So what do we clean?</h2>
        <div className='custom-scrollbar' style={{   
                        display: 'flex', 
                        justifyContent: 'start', 
                        overflowX: 'scroll', 
                        borderRadius: '24px'}}>
            {renderKids()}
        </div>
    </div>
  )
}

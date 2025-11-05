import './Services.css'; 

function Services() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>

     
      <div className="d-flex justify-content-center gap-4 flex-nowrap overflow-auto">
        {/* Card 1 */}
        <div className="card service-card">
          <img
            src="https://wallpapercave.com/wp/wp6987774.jpg" height="200px" width="300px"
            className="card-img-top hover-highlight"
            alt="Beach Holidays"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Beach Holidays</h5>
            <p className="card-text">
              Relax on soft white sands beside Travel Vihag tours.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card service-card">
          <img
            src="https://images.pexels.com/photos/1125776/pexels-photo-1125776.jpeg?cs=srgb&dl=forest-grass-green-1125776.jpg&fm=jpg"  height="200px" width="300px"
            className="card-img-top hover-highlight"
            alt="Forest Retreat"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Forest Retreat</h5>
            <p className="card-text">
              Explore lush greenery and serene waterfalls.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card service-card">
          <img
            src="https://th.bing.com/th/id/R.61b5be101b7f9189ffc62347330327b6?rik=2s18nkzBrl8QlQ&riu=http%3a%2f%2feskipaper.com%2fimages%2fmountains-1.jpg&ehk=dzdr4yMOey3MMOwNEUunWfLRAFndhuMyenoiqKzzwQo%3d&risl=&pid=ImgRaw&r=0"  height="200px" width="300px"
            className="card-img-top hover-highlight"
            alt="Mountain Escape"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Mountain Escape</h5>
            <p className="card-text">
              Find peace in the heights with Travel Vihag.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
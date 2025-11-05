
function Services() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row justify-content-center text-center">

        {/* Beach Holidays */}
        <div className="col-md-4 mb-4">
          <img src="beach.jpg" className="img-fluid rounded" alt="Beach Holidays" />
          <p className="mt-2">
            <strong>Beach Holidays</strong><br />
            Relax on soft white sands beside Travel Vihag tours.
          </p>
        </div>

        {/* Forest Retreat */}
        <div className="col-md-4 mb-4">
          <img src="forest.jpg" className="img-fluid rounded" alt="Forest Retreat" />
          <p className="mt-2">
            <strong>Forest Retreat</strong><br />
            Explore lush greenery and serene waterfalls.
          </p>
        </div>

        {/* Example: Add more services */}
         
        <div className="col-md-4 mb-4">
          <img src="mountains.jpg" className="img-fluid rounded" alt="Mountain Escape" />
          <p className="mt-2">
            <strong>Mountain Escape</strong><br />
            Find peace in the heights with Travel Vihag.
          </p>
        </div>
    

      </div>
    </div>
  );
};

export default Services;
import card1 from '../assets/card_1.jpg';
import card2 from '../assets/card_2.jpg';
import card3 from '../assets/card_3.jpg';
import card4 from '../assets/card_4.jpg';

const Destinations = () => {
  return (
    <div>
      <h2 id="destinations" className="fs-1 p-5 mt-5 mb-5 text-center">Destinații Populare</h2>
      <div className="row">
        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-md-3 d-flex mb-4">
          <div className="card flex-fill">
            <img src={card1} className="card-img-top" alt="card_1" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Maldive</h5>
              <p className="card-text">Maldive este renumită pentru plajele sale cu nisip alb, apele turcoaz și viața marină unică.</p>
              <a href="https://maldives.org.my/about-maldives" target="_blank" rel="noopener noreferrer" className="btn btn-info mt-auto">Read More</a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-md-3 d-flex mb-4">
          <div className="card flex-fill">
            <img src={card2} className="card-img-top" alt="card_2" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Roma</h5>
              <p className="card-text">Roma, capitala Italiei, este un oraș cu o istorie bogată, fondat conform legendei de gemenii Romulus și Remus în 753 î.Hr.</p>
              <a href="https://romesite.com/" target="_blank" rel="noopener noreferrer" className="btn btn-info mt-auto">Read More</a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-12 col-sm-6 col-md-3 d-flex mb-4">
          <div className="card flex-fill">
            <img src={card3} className="card-img-top" alt="card_3" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Elveția</h5>
              <p className="card-text">Maluri împădurite de palmieri pe Lacul Lugano, peisaje glaciare între Eiger, Mönch și Jungfrau, sate medievale și orașe vibrante.</p>
              <a href="https://www.myswitzerland.com/en/" target="_blank" rel="noopener noreferrer" className="btn btn-info mt-auto">Read More</a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-12 col-sm-6 col-md-3 d-flex mb-4">
          <div className="card flex-fill">
            <img src={card4} className="card-img-top" alt="card_4" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Berlin</h5>
              <p className="card-text">Berlin, capitala Germaniei, este renumit pentru diversitatea sa culturală și stilul de viață relaxat și vibrant.</p>
              <a href="https://www.germany.travel/en/inspiring-germany/berlin.html" target="_blank" rel="noopener noreferrer" className="btn btn-info mt-auto">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;

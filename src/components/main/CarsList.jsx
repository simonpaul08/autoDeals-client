
import CardDemo1 from '../../assets/car-demo-1.jpg';
import CardDemo2 from '../../assets/car-demo-2.jpg';


const CarsList = () => {
  return (
    <section className='cars-list'>
        <article className="card">
            <img src={CardDemo1} alt="car image" className="card-image" />
            <div className="card-details">
                <h3 className="card-title">Car Demo #1</h3>
                <p className="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui magni laboriosam perspiciatis maiores velit.
                </p>
                <p className="card-price">$12000</p>
                <button className="card-button">Buy Now</button>
            </div>
        </article>
        <article className="card">
            <img src={CardDemo2} alt="car image" className="card-image" />
            <div className="card-details">
                <h3 className="card-title">Car Demo #1</h3>
                <p className="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui magni laboriosam perspiciatis maiores velit.
                </p>
                <p className="card-price">$12000</p>
                <button className="card-button">Buy Now</button>
            </div>
        </article>
        <article className="card">
            <img src={CardDemo1} alt="car image" className="card-image" />
            <div className="card-details">
                <h3 className="card-title">Car Demo #1</h3>
                <p className="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui magni laboriosam perspiciatis maiores velit.
                </p>
                <p className="card-price">$12000</p>
                <button className="card-button">Buy Now</button>
            </div>
        </article>
        <article className="card">
            <img src={CardDemo2} alt="car image" className="card-image" />
            <div className="card-details">
                <h3 className="card-title">Car Demo #1</h3>
                <p className="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui magni laboriosam perspiciatis maiores velit.
                </p>
                <p className="card-price">$12000</p>
                <button className="card-button">Buy Now</button>
            </div>
        </article>
    </section>
  )
}

export default CarsList
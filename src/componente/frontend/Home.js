
import React, { useState,useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link , useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
function Home() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
        const history = useHistory();
        const [loading, setLoading] = useState(true);
        const [product, setProduct] = useState([]);
      
    useEffect(() => {

        let isMounted = true;

        
        axios.get(`/api/homefetchproducts`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setProduct(res.data.product);
                    
                    setLoading(false);
                }
                
                else if(res.data.status === 404)
                {
                   
                    swal("Warning",res.data.message,"error");
                }
            }
        });

        return () => {
            isMounted = false
        };
    }, [ history]);
    if(loading)
    {
        return <h4>Loading Products...</h4>
    }
    else
    {
        var showProductList = '';
        showProductList = product.map( (item, idx) => {
            return (
                <div className="col-md-3" key={idx}>
                    <div class="card" style={{width: "18rem"}}>
                    <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    
                </div>
            )

        });
    }

    return (
        <div>
            {/* slider */}
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="/img/R.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="/img/R2.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="/img/R3.png" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="py-5">
                 <div className="container">
                    <div className="group-title">
                        <div className="top-title">
                            <h2 style={{ textAlign:"center" }}>Sélection PC Gamer</h2>
                        </div>
                        <hr></hr>
                        <Carousel responsive={responsive}>
                        {/* <div class="card" style={{width: "18rem;"}}>
                            <img src="/img/TechTrend.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="#" class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div> */}
                        {showProductList}
                        
                        
                        </Carousel>;
                    </div>
                </div>
           </div>
        </div>

    );
}

export default Home;
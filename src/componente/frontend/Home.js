
import React, { useState,useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link , useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import "./styles.css";
import RatingStars from "react-rating-stars-component";


function Home() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 570 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 570, min: 0 },
          items: 1
        }
      };
      
        const history = useHistory();
        const [loading, setLoading] = useState(true);
        const [product, setProduct] = useState([]);
        const [featured,setfeatured]= useState([]);
        const [Accessoires,setAccessoires]= useState([]);
        const [Ordinateurs,setOrdinateurs]= useState([]);
        const [reseaux,setReseaux]= useState([]);
        const [Composants,setComposants]= useState([]);
        const [rating,setRating]= useState([]);

        

        
        
        const productCount = product.length;

         
    useEffect(() => {

        let isMounted = true;

        
        axios.get(`/api/store`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setProduct(res.data.cate);
                    
                    setLoading(false);
                }
                
                else if(res.data.status === 404)
                {
                   
                    swal("Warning",res.data.message,"error");
                }
            }
        });
       
        axios.get(`/api/cateone`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setAccessoires(res.data.cate_one);
                    
                    setLoading(false);
                }
                
                else if(res.data.status === 404)
                {
                   
                    swal("Warning",res.data.message,"error");
                }
            }
        });
        axios.get(`/api/catetwo`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setOrdinateurs(res.data.cate_two);
                    
                    setLoading(false);
                }
                
                else if(res.data.status === 404)
                {
                   
                    swal("Warning",res.data.message,"error");
                }
            }
        });
        axios.get(`/api/catethree`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setReseaux(res.data.cate_three);
                    
                    setLoading(false);
                }
                
                else if(res.data.status === 404)
                {
                   
                    swal("Warning",res.data.message,"error");
                }
            }
        });
        axios.get(`/api/catefour`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setComposants(res.data.cate_four);
                    
                    setLoading(false);
                }
                
                else if(res.data.status === 404)
                {
                   
                    swal("Warning",res.data.message,"error");
                }
            }
        });
        axios.get(`/api/getRecommendedProducts`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setRating(res.data.popular_products);
                    
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

        //rating
        var ratingshow = '';
        ratingshow = rating.map( (item, idx) => {
            return (
                <div className="col" key={idx}>
                    <div className="card text-center" style={{width: "300px", height:"550px"}}>
                        <div className="card-header">
                        
                            <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                      
                        </div>
                        <div className="card-body">
                                <h5 className="card-title">{ item.name }</h5>
                            
                            <p class="card-text">{ item.slug }</p>
                        </div>
                        <div className="mb-3 d-flex justify-content-around">
                                
                                <RatingStars
                               count={5}
                               value={item.average_rating}
                               size={24}
                               activeColor="#ffd700"
                               edit={false}
                               />
                             
                           </div>
                        <div class="mb-5 d-flex justify-content-around">
                            <h3 className='card-price'>{item.selling_price}DZD</h3>
                            <Link to={`/collections/${item.category_slug}/${item.slug}`} className="btn btn-primary">details</Link>
                        </div>
                    </div>
                </div>
            )

        });
        var showProductList = '';
            showProductList = product.map( (item, idx) => {
                return (
                    <div className="col" key={idx}>
                        <div className="card text-center" style={{width: "300px", height:"550px"}}>
                            <div className="card-header">
                            
                                <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                          
                            </div>
                            <div className="card-body">
                                    <h5 className="card-title">{ item.name }</h5>
                                
                                <p class="card-text">{ item.slug }</p>
                            </div>
                            <div className="mb-3 d-flex justify-content-around">
                                    
                                    <RatingStars
                                   count={5}
                                   value={item.average_rating}
                                   size={24}
                                   activeColor="#ffd700"
                                   edit={false}
                                   />
                                 
                               </div>
                            <div class="mb-5 d-flex justify-content-around">
                                <h3 className='card-price'>{item.selling_price}DZD</h3>
                                <Link to={`/collections/${item.category_slug}/${item.slug}`} className="btn btn-primary">details</Link>
                            </div>
                        </div>
                    </div>
                )
    
            });

        
        //accsoire
        var Accessoireslist='';    
            Accessoireslist = Accessoires.map( (item, idx) => {
                return (
                    <div className="col" key={idx}>
                        <div className="card text-center" style={{width: "300px", height:"550px"}}>
                            <div className="card-header">
                            
                                <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                          
                            </div>
                            <div className="card-body">
                                    <h5 className="card-title">{ item.name }</h5>
                                
                                <p className="card-text">{ item.slug }</p>
                            </div>
                            <div className="mb-3 d-flex justify-content-around">
                                    
                                    <RatingStars
                                   count={5}
                                   value={item.average_rating}
                                   size={24}
                                   activeColor="#ffd700"
                                   edit={false}
                                   />
                                 
                               </div>
                            <div className="mb-5 d-flex justify-content-around">
                                <h3 className='card-price'>{item.selling_price}DZD</h3>
                                <Link to={`/collections/${item.category_slug}/${item.slug}`} className="btn btn-primary">details</Link>
                            </div>
                        </div>
                    </div>
                )
    
            });
        //Ordinateurs & tablettes
        var Ordinateurslist='';    
            Ordinateurslist = Ordinateurs.map( (item, idx) => {
                return (
                    <div className="col" key={idx}>
                        <div className="card text-center" style={{width: "300px", height:"550px"}}>
                            <div className="card-header">
                            
                                <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                          
                            </div>
                            <div className="card-body">
                                    <h5 className="card-title">{ item.name }</h5>
                                
                                <p className="card-text">{item.slug }</p>
                            </div>
                            <div className="mb-3 d-flex justify-content-around">
                                    
                                    <RatingStars
                                   count={5}
                                   value={item.average_rating}
                                   size={24}
                                   activeColor="#ffd700"
                                   edit={false}
                                   />
                                 
                               </div>
                            <div className="mb-5 d-flex justify-content-around">
                                <h3 className='card-price'>{item.selling_price}DZD</h3>
                                <Link to={`/collections/${item.category_slug}/${item.slug}`} className="btn btn-primary">details</Link>
                            </div>
                        </div>
                    </div>
                )
    
            });

            // reseaux-wifi
            var reseauxlist='';    
            reseauxlist = reseaux.map( (item, idx) => {
                return (
                    <div className="col" key={idx}>
                        <div className="card text-center" style={{width: "300px", height:"550px"}}>
                            <div className="card-header">
                            
                                <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                          
                            </div>
                            <div className="card-body">
                                    <h5 className="card-title">{ item.name }</h5>
                                
                                <p class="card-text">{ item.slug }</p>
                            </div>
                            <div className="mb-3 d-flex justify-content-around">
                                    
                                    <RatingStars
                                   count={5}
                                   value={item.average_rating}
                                   size={24}
                                   activeColor="#ffd700"
                                   edit={false}
                                   />
                                 
                               </div>
                            <div className="mb-5 d-flex justify-content-around">
                                <h3 className='card-price'>{item.selling_price}DZD</h3>
                                <Link to={`/collections/${item.category_slug}/${item.slug}`} className="btn btn-primary">details</Link>
                            </div>
                        </div>
                    </div>
                )
    
            });   
            //composants
            var Composantslist='';    
            Composantslist = Composants.map( (item, idx) => {
                return (
                    <div className="col" key={idx}>
                        <div className="card text-center" style={{width: "300px", height:"550px"}}>
                            <div className="card-header">
                            
                                <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                          
                            </div>
                            <div className="card-body">
                                    <h5 className="card-title">{ item.name }</h5>
                                
                                <p class="card-text">{ item.slug }</p>
                            </div>
                            <div className="mb-3 d-flex justify-content-around">
                                    
                                    <RatingStars
                                   count={5}
                                   value={item.average_rating}
                                   size={24}
                                   activeColor="#ffd700"
                                   edit={false}
                                   />
                                 
                               </div>
                            <div className="mb-5 d-flex justify-content-around">
                                <h3 className='card-price'>{item.selling_price}DZD</h3>
                                <Link to={`/collections/${item.category_slug}/${item.slug}`} className="btn btn-primary">details</Link>
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
                 <div className="container-fluid">
                 <div className="group-title">
                        <div className="top-title">
                            <h2 style={{ textAlign:"center" }}>Trend-products</h2>
                        </div>
                        <hr></hr>
                        <Carousel responsive={responsive}>
                        {ratingshow}
                        </Carousel>
                    </div>
                    <div className="group-title">
                        <div className="top-title">
                            <h2 style={{ textAlign:"center" }}>ALL Products</h2>
                        </div>
                        <hr></hr>
                        <Carousel responsive={responsive}>
                        {showProductList}
                        </Carousel>
                    </div>
                   
                    <div className="group-title">
                        <div className="top-title">
                            <h2 style={{ textAlign:"center" }}>Accessoires d'Ordinateurs</h2>
                        </div>
                        <hr></hr>
                        <Carousel responsive={responsive}>
                        {Accessoireslist}
                        </Carousel>;
                    </div>
                    <div className="group-title">
                        <div className="top-title">
                            <h2 style={{ textAlign:"center" }}>Ordinateurs & tablettes</h2>
                        </div>
                        <hr></hr>
                        <Carousel responsive={responsive}>
                        {Ordinateurslist}
                        </Carousel>
                    </div>
                    <div className="group-title">
                        <div className="top-title">
                            <h2 style={{ textAlign:"center" }}>Reséaux-Wifi</h2>
                        </div>
                        <hr></hr>
                        <Carousel responsive={responsive}>
                        {reseauxlist}
                        </Carousel>
                    </div>
                    <div className="group-title">
                        <div className="top-title">
                            <h2 style={{ textAlign:"center" }}>Composants D'Ordinateurs</h2>
                        </div>
                        <hr></hr>
                        <Carousel responsive={responsive}>
                        {Composantslist}
                        </Carousel>
                    </div>
                    
                    
                </div>
           </div>
           {/* about us */}
           <div class="container my-5">
                <h1 class="text-center mb-4">About Us</h1>
                <div class="row">
                    <div class="col-md-6">
                        <img src="https://via.placeholder.com/500x350" class="img-fluid rounded"/>
                    </div>
                    <div class="col-md-6">
                        <h3>Who We Are</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et ultrices odio, nec tincidunt tellus. Suspendisse potenti. Duis ut elementum turpis, eu lobortis quam. Sed mattis semper mauris, in efficitur ante ultrices eget. Pellentesque ut iaculis enim. Vestibulum ultricies mauris at lobortis imperdiet. Donec consequat pharetra lectus eu luctus. Nulla interdum magna vitae erat tincidunt, at suscipit mi fringilla.</p>
                        <h3>Our Mission</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et ultrices odio, nec tincidunt tellus.</p>
                    </div> 
                </div>
            </div>
              {/*footer*/}
              <footer className="bg-primary text-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>About Us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada quam in massa varius, vel tristique odio interdum. Sed non lectus euismod, ultricies elit quis, malesuada urna.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                            <li>1234 Main St.</li>
                            <li>Anytown, USA 12345</li>
                            <li>Phone: (555) 555-1212</li>
                            <li>Email: info@example.com</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <ul  className="list-unstyled"  >
                            <li ><a href="#" style={{  color: "white" }}><i className="fab fa-facebook"></i> Facebook</a></li>
                            <li><a href="#" style={{  color: "white" }}><i className="fab fa-twitter"></i> Twitter</a></li>
                            <li><a href="#" style={{  color: "white" }}><i className="fab fa-instagram"></i> Instagram</a></li>
                            <li><a href="#" style={{  color: "white" }}><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2023 Company Name</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <ul className="list-unstyled">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
        
    );
}

export default Home;
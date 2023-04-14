
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
        

        
        
        const productCount = product.length;

         
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
        axios.get(`/api/homeproductsfeatured`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setfeatured(res.data.product);
                    
                    setLoading(false);
                }
                
                else if(res.data.status === 404)
                {
                   
                    swal("Warning",res.data.message,"error");
                }
            }
        });
        axios.get(`/api/categoryidone`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setAccessoires(res.data.product);
                    
                    setLoading(false);
                }
                
                else if(res.data.status === 404)
                {
                   
                    swal("Warning",res.data.message,"error");
                }
            }
        });
        axios.get(`/api/categoryidtwo`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setOrdinateurs(res.data.product);
                    
                    setLoading(false);
                }
                
                else if(res.data.status === 404)
                {
                   
                    swal("Warning",res.data.message,"error");
                }
            }
        });
        axios.get(`/api/categoryidthree`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setReseaux(res.data.product);
                    
                    setLoading(false);
                }
                
                else if(res.data.status === 404)
                {
                   
                    swal("Warning",res.data.message,"error");
                }
            }
        });
        axios.get(`/api/categoryidfour`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setComposants(res.data.product);
                    
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
                        <div className="card" style={{width: "16rem", height:"550px"}}>
                        <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.slug}</p>
                                    <p className="card-text">price:{item.selling_price}DZ</p>
                                    <Link to={`/collections/${item.category.slug}/${item.slug}`} className="btn btn-primary">See the details</Link>
                                </div>
                            </div>
                        
                    </div>
                )
    
            });

            // featured
        var showfeaturedList='';    
            showfeaturedList = featured.map( (item, idx) => {
                return (
                    <div className="col-md-3" key={idx}>
                        <div className="card" style={{width: "16rem", height:"550px"}}>
                        <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.slug}</p>
                                    <p className="card-text">price:{item.selling_price}DZ</p>
                                    <Link to={`/collections/${item.category.slug}/${item.slug}`} className="btn btn-primary">See the details</Link>
                                </div>
                            </div>
                        
                    </div>
                )
    
            });
        
        //accsoire
        var Accessoireslist='';    
            Accessoireslist = Accessoires.map( (item, idx) => {
                return (
                    <div className="col-md-3" key={idx}>
                        <div className="card" style={{width: "16rem", height:"550px"}}>
                        <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.slug}</p>
                                    <p className="card-text">price:{item.selling_price}DZ</p>
                                    <Link to={`/collections/${item.category.slug}/${item.slug}`} className="btn btn-primary">See the details</Link>
                                </div>
                            </div>
                        
                    </div>
                )
    
            });
        //Ordinateurs & tablettes
        var Ordinateurslist='';    
            Ordinateurslist = Ordinateurs.map( (item, idx) => {
                return (
                    <div className="col-md-3" key={idx}>
                        <div className="card" style={{width: "16rem", height:"550px"}}>
                        <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.slug}</p>
                                    <p className="card-text">price:{item.selling_price}DZ</p>
                                    <Link to={`/collections/${item.category.slug}/${item.slug}`} className="btn btn-primary">See the details</Link>
                                </div>
                            </div>
                        
                    </div>
                )
    
            });

            // reseaux-wifi
            var reseauxlist='';    
            reseauxlist = reseaux.map( (item, idx) => {
                return (
                    <div className="col-md-3" key={idx}>
                        <div className="card" style={{width: "16rem", height:"550px"}}>
                        <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.slug}</p>
                                    <p className="card-text">price:{item.selling_price}DZ</p>
                                    <Link to={`/collections/${item.category.slug}/${item.slug}`} className="btn btn-primary">See the details</Link>
                                </div>
                            </div>
                        
                    </div>
                )
    
            });   
            var Composantslist='';    
            Composantslist = Composants.map( (item, idx) => {
                return (
                    <div className="col-md-3" key={idx}>
                        <div className="card" style={{width: "16rem", height:"550px"}}>
                        <img src={`http://localhost:8000/${item.image}`} className="card-img-top" alt={item.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.slug}</p>
                                    <p className="card-text">price:{item.selling_price}DZ</p>
                                    <Link to={`/collections/${item.category.slug}/${item.slug}`} className="btn btn-primary">See the details</Link>
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
                            <h2 style={{ textAlign:"center" }}>ALL Products</h2>
                        </div>
                        <hr></hr>
                        <Carousel responsive={responsive}>
                        {showProductList}
                        </Carousel>
                    </div>
                    <div className="group-title">
                        <div className="top-title">
                            <h2 style={{ textAlign:"center" }}>featured</h2>
                        </div>
                        <hr></hr>
                        <Carousel responsive={responsive}>
                        {showfeaturedList}
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
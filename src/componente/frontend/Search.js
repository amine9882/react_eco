import React from "react";

import { useState, useEffect } from 'react';
import { useLocation , Link } from 'react-router-dom';
import axios from 'axios';
import RatingStars from "react-rating-stars-component";

function Search ()
{
    const [loading, setLoading] = useState(true);
    
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q');
    const [searchResults, setSearchResults] = useState([]);
    const productCount = searchResults.length;
  useEffect(() => {

    axios.get(`/api/products/search?query=${searchQuery}`).then(res=>{
        console.log('search',searchQuery);
        console.log('res',res)
        
        if(res.data.status === 200)
            {
                setSearchResults(res.data.data);
            }    
        })}, [searchQuery]);
       
        //   axios.get(`/api/products/search?query=${searchQuery}`).then(res=>{
        //     if(isMounted)
        //             {
        //                 if(res.data.status === 200)
        //                 {
        //                     setData(res.data.data);
                            
        //                     setLoading(false);
        //                 }
                        
                        
        //             }
           
    // if(loading)
    // {
    //     return <h4>Loading Products...</h4>
    // }
    // else
    // {
          var showProductList = '';
          if(productCount)
        {
            showProductList = searchResults.map( (item, idx) => {
                return (
                    <div className="col" key={idx}>
                        <div className="card text-center " style={{width: "300px", height:"550px"}}>
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
                                   value={item.rating_avg}
                                   size={24}
                                   activeColor="#ffd700"
                                   edit={false}
                                   />
                                 
                               </div>
                            <div class="mb-5 d-flex justify-content-around">
                                <h3 className='card-price'>{item.selling_price}DZD</h3>
                                <Link to={`/collections/${item.category.slug}/${item.slug}`} className="btn btn-primary">details</Link>
                            </div>
                        </div>
                    </div>
                )
    
            });
        }
        else
        {
            showProductList = 
            <div className="col-md-12">
                <h4>No Product Available for {searchQuery}</h4>
            </div>
        }
      
    // }  

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
            <div className="container py-5">
              <div className="top-title">
                                <h2 style={{ textAlign:"center" }}>searchResults</h2>
                            </div>
                   <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
                    
                            
                            {showProductList}
                    </div>
            </div>        
                   
        </div>
    );                    
}
export default Search;


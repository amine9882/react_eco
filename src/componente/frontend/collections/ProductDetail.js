import React, {useEffect, useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
// import './App.css';
import { FaStar } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

function ProductDetail(props)
{

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [ratingInput, setRating] = useState({
        rating : '',
       
    });
    useEffect(() => {

        let isMounted = true;

        const category_slug = props.match.params.category;
        const product_slug = props.match.params.product;
        axios.get(`/api/viewproductdetail/${category_slug}/${product_slug}`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setProduct(res.data.product);
                    setLoading(false);
                }
                else if(res.data.status === 404)
                {
                    history.push('/collections');
                    swal("Warning",res.data.message,"error");
                }
            }
        });

        return () => {
            isMounted = false
        };
    }, [props.match.params.category, props.match.params.product, history]);

    // Quantity Increment/Decrement in Hooks - Start
    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity(prevCount => prevCount - 1);
        }
    }
    const handleIncrement = () => {
        if(quantity < 10){
            setQuantity(prevCount => prevCount + 1);
        }
    }
    
    // Quantity Increment/Decrement in Hooks - End


    const submitAddtocart = (e) => {
        e.preventDefault();
        
        const data = {
            product_id: product.id,
            product_qty: quantity,
        }
       
        axios.post(`/api/add-to-cart`, data).then(res=>{
            if(res.data.status === 201){
                //Created - Data Inserted
                swal("Success",res.data.message,"success");
            }else if(res.data.status === 409){
                //Already added to cart
                swal("Success",res.data.message,"success");
            }else if(res.data.status === 401){
                //Unauthenticated
                swal("Error",res.data.message,"error");
            }else if(res.data.status === 404){
                //Not Found
                swal("Warning",res.data.message,"warning");
            }
        });
               
    } 
    const handleInput = (e) => {
        e.persist();
        setRating({...ratingInput, [e.target.name]: e.target.value })
    }
    const handleClick = (e) => {
        e.preventDefault();
        
        const data = {
            product_id: product.id,
            rating:ratingInput.rating,
        }
        axios.post(`/api/products/${product.id}/ratings?rating=${ratingInput.rating}&product_id=${product.id}`, data).then(res=>{
            if(res.data.status === 200){
                //Created - Data Inserted
                swal("Success",res.data.message,"success");
            
            }else if(res.data.status === 404){
                //Not Found
                swal("Warning",res.data.message,"warning");
            }
        });
    }
    

    if(loading)
    {
        return <h4>Loading Product Detail...</h4>
    }
    else
    {
        
        var avail_stock = '';
        if(product.qty > 0)
        {
                avail_stock = <div>
                    <label className="btn-sm btn-success px-4 mt-2">In stock</label>
                    <div className="row">
                        <div className="col-md-3 mt-3">
                            <div className="input-group">
                                <button type="button"  onClick={handleDecrement} className="input-group-text">-</button>
                                <div className="form-control text-center">{quantity}</div>
                                <button type="button" onClick={handleIncrement} className="input-group-text">+</button>
                            </div>
                        </div>
                        <div className="col-md-3 mt-3">
                            <button type="button" className="btn btn-primary w-100" onClick={submitAddtocart}>Add to Cart</button>
                        </div>
                        <div className="col-md-3 mt-3">
                        <label>Rating</label>
                        <input type="number" name="rating" onChange={handleInput} value={ratingInput.rating} className="form-control" />
                        <button onClick={handleClick}>Rating</button>
                        </div>
                    </div>
                </div>
               
        }
        else
        {
            avail_stock = <div>
                <label className="btn-sm btn-danger px-4 mt-2">Out of stock</label>
            </div>
        }
        

    return (
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Collections / {product.category.name} / {product.name}</h6>
                </div>
            </div>

            <div className="py-3">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 border-end">
                            <img src={`http://localhost:8000/${product.image}`} alt={product.name} className="w-100" />
                        </div>

                        <div className="col-md-8">
                            <h4>
                                {product.name}
                                <span className="float-end badge btn-sm btn-danger badge-pil"> {product.brand} </span>
                            </h4>
                            <p> {product.description} </p>
                            <h4 className="mb-1"> 
                                Rs: {product.selling_price}
                                <s className="ms-2">  Rs: {product.original_price} </s>
                            </h4>
                            <div>

                                {avail_stock}
                            </div>

                            <button type="button" className="btn btn-danger mt-3">Add to Wishlist</button>
                           
                       </div>

                    </div>
                    <div class="modal" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="rating-css">
                                    <div class="star-icon">
                                        <input type="radio" value="1" name="product_rating" checked id="rating1"/>
                                        <label for="rating1" class="fa fa-star"></label>
                                        <input type="radio" value="2" name="product_rating" id="rating2"/>
                                        <label for="rating2" class="fa fa-star"></label>
                                        <input type="radio" value="3" name="product_rating" id="rating3"/>
                                        <label for="rating3" class="fa fa-star"></label>
                                        <input type="radio" value="4" name="product_rating" id="rating4"/>
                                        <label for="rating4" class="fa fa-star"></label>
                                        <input type="radio" value="5" name="product_rating" id="rating5"/>
                                        <label for="rating5" class="fa fa-star"></label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
 }
}

export default ProductDetail;
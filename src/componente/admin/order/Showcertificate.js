import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert';

function Showcertificate(props)
{
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState({})  ;
   
    useEffect(() => {
        let isMounted = true;
        
        const id = props.match.params.id;
        axios.get(`/api/admin/orderitems/${id}`).then(res=>{
            if(res.data.status === 200)
            {
                setShow(res.data.orders);
                setLoading(false);
                console.log('res',res)
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                history.push('/admin/orderitems');
            }
        
        });
        return () => {
            isMounted = false
        };

    }, [props.match.params.id, history]);

    const handleClick = (e) => {
        e.preventDefault();
        
        const id = props.match.params.id;
        const data = {
            purchased :'1',
        }
        axios.put(`/api/update-orderitems/${id}`,data).then(res=>{
            if(res.data.status === 200){
              
                swal("Success",res.data.message,"success");
                
            
            }else if(res.data.status === 404){
                //Not Found
                swal("Warning",res.data.message,"warning");
            }
            
        });
    }
    const deleteItem = (e, id) => {
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`/api/delete-item/${id}`).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                history.push('/admin/orderitems');
            }
           
        });
    }
    
    if(loading)
    {
        return <h4>Loading...</h4>
    }
    else
    {       
            var confn = '';
            var list = '';
           list= show.map((item, idx) => {
            
    
          if(item.purchased == 0){
            confn = <div className='row'> 
                <div className='col'>
                <button type="button" onClick={handleClick}className="btn btn-primary mt-3">confirmation</button>
                </div>
                <div className='col'>
                <button type="button" onClick={(e)=>deleteItem(e, item.id)} className="btn btn-danger mt-3 float-end">Cancel</button>
                </div>
           
            </div>
            }
            else
            {
                confn = <div>
                    <label className="list-group-item list-group-item-action list-group-item-success">Confirmed</label>
                </div>
            }
            return (
                <div className='col' key={idx}>
                    <p key={item.id}></p>
                    <ul className="list-group">
                        <li className="list-group-item">Full name : {item.firstname} {item.lastname}</li>
                        <li className="list-group-item">phone : {item.phone}</li>
                        <li className="list-group-item">email : {item.email}</li>
                        <li className="list-group-item">address : {item.address}</li>
                        <li className="list-group-item">city : {item.city}</li>
                        <li className="list-group-item">Product : {item.Product_name}</li>
                        <li className="list-group-item">Quantity : {item.qty}</li>
                        <li className="list-group-item">total price : {item.price}</li>
                        
                    </ul>
                    <img src={`http://localhost:8000/${item.image}`} className="mt-3" width="400px" /> 

                </div>
                
            )
            });
        //    var confn = '';
    
        //   if(item.purchased == 0){
        //     confn = <div> 
        //     <button type="button" onClick={handleClick}className="btn btn-danger mt-3">confirmation</button>
        //     </div>
        //     }
        //     else
        //     {
        //         confn = <div>
        //             <label className="btn-sm btn-danger px-4 mt-2">Confirmed</label>
        //         </div>
        //     }
        return(
            <div className="container px-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h4>certificate 
                            <Link to="/admin/orderitems" className="btn btn-primary btn-sm float-end">BACK</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        
                        <div>   
                            {list}
                                {/* {orders.id}
                                {show.order_id}
                                <img src={`http://localhost:8000/${show.image}`} width="400px" />   */}
                                <div className="col-md-3">
                                    {confn}
                                </div>
                                
                        </div>   
                    </div>  
                </div>    
            </div>
        )
    }
}

export default Showcertificate;
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert';

function Showcertificate(props)
{
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState({
        id:'',     
       
    })  ;
   
    useEffect(() => {
        let isMounted = true;
        
        const id = props.match.params.id;
        axios.get(`/api/admin/orderitems/${id}`).then(res=>{
            if(res.data.status === 200)
            {
                setShow(res.data.certifi);
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

    //  var certificate = "";
    //     certificate =  Object.values(show).map((item) => {
    //      console.log(item);
    //     return (
    //         <p key={item.id}>  
    //             <img src={`http://localhost:8000/${item.image}`} width="400px" />   
    //         </p>        
    //     );
    // }
    // )     
    
    if(loading)
    {
        return <h4>Loading...</h4>
    }
    else
    {   
    
      return(
            <div className="container px-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h4>certificate 
                            <Link to="/admin/orderitems" className="btn btn-primary btn-sm float-end">BACK</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        {/* {certificate} */}
                        <div>   

                                {show.id}
                                {show.order_id}
                                <img src={`http://localhost:8000/${show.order.image}`} width="400px" />  
                                    
                        </div>   
                    </div>  
                </div>    
            </div>
        )
    }
}

export default Showcertificate;
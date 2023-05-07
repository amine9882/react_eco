import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Orderitems()
{
    const [loading, setLoading] = useState(true);
    const [viewOrderitems, setItem] = useState([]);

    // const [showModal, setShowModal] = useState(false);

    // const handleClick = () => {
    //   setShowModal(!showModal);
    // }  
    
    useEffect(() => {

        let isMounted = true;
        document.title = "View Orderitem";

        axios.get(`/api/admin/orderitems`).then(res=>{
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setItem(res.data.orderitems);
                    setLoading(false);
                }
            }
        });
        return () => {
            isMounted = false
        };
    }, []);
    var display_orderitem = "";
    if(loading)
    {
        return <h4>Loading Orders...</h4>
    }
    else
    {
        display_orderitem = viewOrderitems.map( (item) => {
            // console.log(item);
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.order.firstname}</td>
                    <td>{item.order.lastname}</td>
                    <td>{item.order.email}</td>
                    <td>{item.order.city}</td>
                    <td><img src={`http://localhost:8000/${item.order.image}`} width="100px" alt={item.order.name} />
                    </td>

                    {/* <td>{item.order.image}</td> */}
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                    <td>
                        <Link to={`orderitem-certificate/${item.id}`} className="btn btn-success btn-sm">View</Link>
                    </td>
                </tr>
            )
        });
    }

    return(
        <div className="container px-4 mt-3">
            <div className="card">
                <div className="card-header">
                    <h4>View Orderitems</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First name </th>
                                    <th>Last name</th>
                                    <th>Email </th>
                                    <th>City</th>
                                    <th>Certificate</th>
                                    <th>Quntite</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                               {display_orderitem}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>        

    );

}
export default Orderitems;

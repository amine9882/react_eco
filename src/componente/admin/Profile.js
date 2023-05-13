import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function Profile (){

    const [loading, setLoading] = useState(true);
    const [Userlist, setUserlist] = useState([]);

    useEffect(() => {
        let isMounted = true;
        axios.get(`/api/view-user`).then(res=>{
            console.log('res',res)
            if(isMounted)
            {
                if(res.status === 200)
                {
                    setUserlist(res.data.user)
                    setLoading(false);
                }
            }
        });

        return () => {
            isMounted = false
        };

    }, []);

    const deleteUser = (e, id) => {
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`/api/delete-user/${id}`).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                swal("Success",res.data.message,"success");
                thisClicked.innerText = "Delete";
            }
        });

    }

    var viewuser_HTMLTABLE = "";
    if(loading)
    {
        return <h4>Loading User Profile...</h4>
    }
    else
    {
        var role='';
        viewuser_HTMLTABLE =  Userlist.map( (item) => {
            if(item.role_as==1)
            {
                role = <div>
                    <p>Admin</p>
                </div>
            }
            else
            {
                role = <div>
                    <p>customer</p>
                </div>
            }
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{role}</td>
                    <td>
                        <button type="button" onClick={ (e) => deleteUser(e, item.id) } className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            )
        });
    }
    return (
        <div className="container px-4 mt-3">
        <div className="card">
            <div className="card-header">
                <h4>View profile </h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Role </th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {viewuser_HTMLTABLE}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile;
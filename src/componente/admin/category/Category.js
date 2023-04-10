import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function Category() {
    document.title = "Add Category";
    const [categoryInput, setCategory] = useState({
        slug: '',
        name: '',
        description: '',
        status: '',
    });
    const [pricture, setPicture] = useState([]);
    const [errorlist, setError] = useState([]);
    
    const handleInput = (e) => {
        e.persist();
        setCategory({...categoryInput, [e.target.name]: e.target.value })
    }
    const handleImage = (e) => {
        setPicture({ image: e.target.files[0] });
    }
    const submitCategory = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', pricture.image);
        formData.append('category_id', categoryInput.category_id);
        formData.append('slug', categoryInput.slug);
        formData.append('name', categoryInput.name);
        formData.append('description', categoryInput.description);
        formData.append('status', categoryInput.status);

        axios.post(`api/store-category`, formData,{ headers: {'Content-Type': 'multipart/form-data'}}).then(res => {
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setCategory({...categoryInput, 
                    category_id: '',
                    slug: '',
                    name: '',
                    description: '',
                    status:'',
                });
                setError([]);
            }
            else if(res.data.status === 400)
            {
                swal("All Fields are mandetory","","error");
                setError(res.data.errors);
            }
        });

    }

    return  (
        <div className="container-fluid px-4">

            <div className="card mt-4">
                <div className="card-header">
                    <h4>Add Category 
                        <Link to="/admin/view-category" className="btn btn-primary btn-sm float-end">View Category</Link>
                    </h4>
                </div>
                <div className="card-body">

                    <form onSubmit={submitCategory} id="CATEGORY_FORM">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                <div className="form-group mb-3">
                                    <label>Slug</label>
                                    <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug} className="form-control" />
                                    <small className="text-danger">{errorlist.slug}</small>
                                    
                                </div>
                                <div className="form-group mb-3">
                                    <label>Name</label>
                                    <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" />
                                    <small className="text-danger">{errorlist.name}</small>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Description</label>
                                    <textarea name="description" onChange={handleInput} value={categoryInput.description} className="form-control"></textarea>
                                    <small className="text-danger">{errorlist.description}</small>
                                </div>
                                <div className="col-md-8 form-group mb-3">
                                        <label>Image</label>
                                        <input type="file" name="image" onChange={handleImage}  className="form-control" />
                                        <small className="text-danger">{errorlist.image}</small>
                                    </div>
                                <div className="form-group mb-3">
                                    <label>Status</label>
                                    <input type="checkbox" name="status" onChange={handleInput} value={categoryInput.status} /> Status 0=shown/1=hidden
                                </div>

                            </div>
                        
                        </div>
                        <button type="submit" className="btn btn-primary px-4 float-end">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Category;
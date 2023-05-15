import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  );
function Dashboard (){
    
 const [UserCount, setCount] = useState(null);
 const [ProductCount, setProductCount] = useState(null);
 const [OrdersCount, setOrederstCount] = useState(null);
 const [Nonconf, setNonconf] = useState(null);

 const [chartData, setChartData] = useState({});

 


     useEffect(() => {
        
       
            axios.get('/api/total-user')
            .then(res=>{
                
                {
                   
                    if(res.data.status === 200)
                    {
                        setCount(res.data.nb_users); 
                        
                    }
                }
                })
        
            axios.get('/api/total-product')
            .then(res=>{
                
                {
                    
                    if(res.data.status === 200)
                    {
                        setProductCount(res.data.nb_Product); 
                        
                    }
                }
                })    

                axios.get('/api/total-orders')
                 .then(res=>{
                
                {
                   
                    if(res.data.status === 200)
                    {
                        setOrederstCount(res.data.nb_orders); 
                        
                    }
                }
                }) 

                axios.get('/api/non-confirme')
                .then(res=>{
               
               {
                  
                   if(res.data.status === 200)
                   {
                    setNonconf(res.data.non_confirme); 
                       
                   }
               }
               })  
              
               
            //    axios.get('api/order-items')
            //    .then((response) => {
            //     const data = response.data;
            //     if (Array.isArray(data) && data.length > 0) {
            //       const dates = data.map((item) => item.date);
            //       const counts = data.map((item) => item.count);
        
            //       // Prepare data for the chart
            //       const chartData = {
            //         labels: dates,
            //         datasets: [
            //           {
            //             label: 'Number of Order Items',
            //             data: counts,
            //             backgroundColor: 'rgba(75, 192, 192, 0.2)',
            //             borderColor: 'rgba(75, 192, 192, 1)',
            //             borderWidth: 1,
            //             tension: 0.3,
            //           },
            //         ],
            //       };
        
            //       setChartData(chartData);
            //     }
            //   })
            //   .catch((error) => {
            //     console.error('Error fetching data:', error);
            //   });
        }, 
        []);
       
        useEffect(()=>{
            const fetchData = async () =>{
                const { data } = await axios.get('api/order-items')
                console.log('data' , data)
                setChartData({
                    labels: data.map((item)=> item.date),
                    datasets: [
                                  {
                                    label: 'Number of Order Items',
                                    data:  data.map((item)=> item.count),
                                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                    borderColor: 'rgba(75, 192, 192, 1)',
                                    borderWidth: 1,
                                    tension: 0.3,
                                  },
                                ],

                })
            }
            fetchData()
        },
        [])
       

    return (
        <div> 
            <main className="mt-5 pt-3">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-md-12">
                        <h4>Dashboard</h4>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="card bg-primary text-white h-100">
                        <div className="card-body py-5" style={{fontSize:"20px"}}>Total number of users: {UserCount}</div>
                        <div className="card-footer d-flex">
                            View Details
                            <span className="ms-auto">
                            <i className="bi bi-chevron-right"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card bg-warning text-dark h-100">
                        <div className="card-body py-5"style={{fontSize:"20px"}}>Total number of products: {ProductCount}</div>
                        <div className="card-footer d-flex">
                            View Details
                            <span className="ms-auto">
                            <i className="bi bi-chevron-right"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card bg-success text-white h-100">
                        <div className="card-body py-5"style={{fontSize:"20px"}}>Total number of orders Confirmed : {OrdersCount}</div>
                        <div className="card-footer d-flex">
                            View Details
                            <span className="ms-auto">
                            <i className="bi bi-chevron-right"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card bg-danger text-white h-100">
                        <div className="card-body py-5" style={{fontSize:"20px"}}>Total number of unconfirmed Orders: {Nonconf}</div>
                        <div className="card-footer d-flex">
                            View Details
                            <span className="ms-auto">
                            <i className="bi bi-chevron-right"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div className="card bg-primary text-white h-100">
                        <div className="card-body py-5">Primary Card</div>
                        <div className="card-footer d-flex">
                            View Details
                            <span className="ms-auto">
                            <i className="bi bi-chevron-right"></i>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="card h-100">
                        <div className="card-header">
                            <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                            Area Chart Example
                        </div>
                        <div className="card-body">
                            
                                {chartData && chartData.datasets && (
                            <Line data={chartData} options={{ responsive: true }} />
                            )}
                            
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </main>
           
        </div>
   
    )
}

export default Dashboard;
import { Component } from "react";
import Dashboard from "../componente/admin/Dashboard";
import Profile from "../componente/admin/Profile";
import Category from "../componente/admin/category/Category";
import ViewCategory from "../componente/admin/category/ViewCategory";
import EditCategory from "../componente/admin/category/EditCategory";
import AddProduct from "../componente/admin/product/AddProduct";
import ViewProduct from "../componente/admin/product/ViewProduct";
import EditProduct from"../componente/admin/product/EditProduct";
import Order from "../componente/admin/order/Order";

const routes = [
    {path:'/admin' ,exact: true, name:'Admin'},
    {path:'/admin/dashboard' ,exact: true, name:'Dashboard',Component:Dashboard},
    {path:'/admin/profile' ,exact: true, name:'Profile', Component:Profile},
    {path:'/admin/add-category',exact: true, name:'Category', Component: Category},
    {path:'/admin/view-category', exact: true, name:'ViewCategory',Component: ViewCategory},
    {path:'/admin/edit-category/:id', exact: true, name:'EditCategory',Component: EditCategory},
    {path:'/admin/add-product',exact: true, name: 'AddProduct', Component: AddProduct },
    {path:'/admin/view-product',exact: true, name: 'ViewProduct', Component: ViewProduct },
    {path: '/admin/edit-product/:id', exact: true, name: 'EditProduct', Component: EditProduct},
    {path: '/admin/orders', exact: true, name: 'Order', Component: Order },
    
];
export default routes;
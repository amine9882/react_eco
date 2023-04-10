
import Home from '../componente/frontend/Home';
import About from '../componente/frontend/About';
import Contact from '../componente/frontend/Contact';
import Page403 from '../componente/errors/Page403';
import Page404 from '../componente/errors/Page404';
import Register from '../componente/frontend/auth/Register';
import Login from '../componente/frontend/auth/Login';
import ViewCategory from '../componente/frontend/collections/ViewCategory';
import ViewProduct from '../componente/frontend/collections/ViewProduct';
import ProductDetail from '../componente/frontend/collections/ProductDetail';
import Cart from '../componente/frontend/Cart';
// import Checkout from '../components/frontend/Checkout';
import Checkout from '../componente/frontend/Checkout';
// import Thankyou from '../components/frontend/Thankyou';

const publicRoutesList = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/about', exact: true, name: 'About', component: About },
    { path: '/contact', exact: true, name: 'Contact', component: Contact },
    { path: '/403', exact: true, name: 'Page403', component: Page403 },
    { path: '/404', exact: true, name: 'Page404', component: Page404 },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/register', exact: true, name: 'Register', component: Register },
    { path: '/collections', exact: true, name: 'ViewCategory', component: ViewCategory },
    { path: '/collections/:slug', exact: true, name: 'ViewCategory', component: ViewProduct },
    { path: '/collections/:category/:product', exact: true, name: 'ProductDetail', component: ProductDetail},
    { path: '/cart', exact: true, name: 'Cart', component: Cart },
    { path: '/checkout', exact: true, name: 'Checkout', component: Checkout },
    // { path: '/thank-you', exact: true, name: 'Thankyou', component: Thankyou },
];

export default publicRoutesList
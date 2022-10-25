import React from 'react';
import {Link} from 'react-router-dom';
export default class Nav extends React.Component{

render(){
    return<div><h1 class="text-center text-white d-none d-lg-block site-heading"><span class="text-primary site-heading-upper mb-3">A Free Bootstrap 4 Business Theme&nbsp;</span><span class="site-heading-lower">Business Casual</span></h1>
<nav class="navbar navbar-dark navbar-expand-lg bg-dark py-lg-4" id="mainNav">

    <div class="container"><a class="navbar-brand text-uppercase d-lg-none text-expanded" href="Home.js">Brand</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarResponsive"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item"><Link to='/'><b>Home</b></Link></li> 
                <li class="nav-item"> <Link to='/about'><b>About</b></Link> </li>
                <li class="nav-item"><Link to='/products'><b>Products</b></Link></li>
                <li class="nav-item"><Link to='/store'><b>Store</b></Link></li>
                <li class="nav-item"><Link to='/order'><b>Order</b></Link></li>
            </ul>
        </div>
    </div>
</nav>
</div>

}
}
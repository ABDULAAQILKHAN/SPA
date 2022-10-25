import React from 'react';

export default class Home extends React.Component
{
    render() {
        return<div>
   
    <section class="page-section clearfix">
        <div class="container">
            <div class="intro"><img alt='unavailable' class="img-fluid intro-img mb-3 mb-lg-0 rounded" src="./assets/img/intro.jpg"/>
                <div class="text-center intro-text p-5 rounded bg-faded">
                    <h2 class="section-heading mb-4"><span class="section-heading-upper">Fresh Coffee</span><span class="section-heading-lower">Worth Drinking</span></h2>
                    <p class="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!</p>
                    <div class="mx-auto intro-button"><a class="btn btn-primary d-inline-block mx-auto btn-xl" role="button" href="home.js">Visit Us Today!</a></div>
                </div>
            </div>
        </div>
    </section>
    <section class="page-section cta">
        <div class="container">
            <div class="row">
                <div class="col-xl-9 mx-auto">
                    <div class="text-center cta-inner rounded">
                        <h2 class="section-heading mb-4"><span class="section-heading-upper">Our Promise</span><span class="section-heading-lower">To You</span></h2>
                        <p class="mb-0">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    </div>
    }
}
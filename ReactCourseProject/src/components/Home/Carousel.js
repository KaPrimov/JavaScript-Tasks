import React from 'react';
import Carousel from 'nuka-carousel';

import pic1 from './products-pics/1.png';
import pic2 from './products-pics/2.png';
import pic3 from './products-pics/3.png';
import pic4 from './products-pics/4.png';
import pic5 from './products-pics/5.png';
import pic6 from './products-pics/6.png';
import pic7 from './products-pics/7.png';
import pic8 from './products-pics/8.png';


const App = React.createClass({
    mixins: [Carousel.ControllerMixin],
    render() {
        return (
            <Carousel>
                <img src={pic1} />
                <img src={pic2} />
                <img src={pic3} />
                <img src={pic4} />
                <img src={pic5} />
                <img src={pic6} />
                <img src={pic7} />
                <img src={pic8} />


            </Carousel>
        )
    }
});

module.exports = App;
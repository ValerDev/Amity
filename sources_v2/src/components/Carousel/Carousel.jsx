import React from 'react';
import Slider from 'infinite-react-carousel';
import './Carousel.scss';
import footerSliderBackground1 from '../../assets/images/Footer/footerSliderBackground1.png';
import footerSliderBackground2 from '../../assets/images/Footer/footerSliderBackground2.png';
import footerSliderBackground3 from '../../assets/images/Footer/footerSliderBackground3.png';

export const Carousel = () => {

    const settings = {
        autoplay: true
    };

    return <div className={'carousel'}>
        <Slider {...settings}>
            <div className={'slideBlock'}>
                <img src={footerSliderBackground1} alt="footerSliderBackground1" />
                <div className={'content'}>
                    <h3 className={'title'}>INSURANCE AND SAFETY</h3>
                    <p className={'description'}>The immense carrier network working with Amity carry liability for the transported commodity. They own of up to $2.000.000 of insurance to make sure your cargo is in safe hand' Our' coordinators will make sure your property is fully covered before it is loaded into the truck.</p>
                </div>
            </div>
            <div className={'slideBlock'}>
                <img src={footerSliderBackground2} alt="footerSliderBackground2" />
                <div className={'content'}>
                    <h3 className={'title'}>WHAT DRIVES US</h3>
                    <p className={'description'}>Fuelled with coffee and passion, we are here to serve our nation to make their life easier and be an example to the industry.</p>
                </div>
            </div>
            <div className={'slideBlock'}>
                <img src={footerSliderBackground3} alt="footerSliderBackground3" />
                <div className={'content'}>
                    <h3 className={'title'}>OUR LEGACY</h3>
                    <p className={'description'}>Managed and operated by team of enthusiasts with decades of experience, offering several solutions to one problem.</p>
                </div>
            </div>
        </Slider>
    </div>
}












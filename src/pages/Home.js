import React from 'react';
import HeroSlider from '../components/sliders/HeroSlider';
import FeaturedSlider from '../components/sliders/FeaturedSlider';
import SectionsHead from '../components/common/SectionsHead';
import TopProducts from '../components/product/TopProducts';


const Home = () => {

    return (
        <main>
            <section id="hero">
                <HeroSlider/>
            </section>

            <section id="featured" className="section">
                <div className="container">
                    <SectionsHead heading="Produk Pilihan"/>
                    <FeaturedSlider/>
                </div>
            </section>

            <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Produk Unggulan"/>
                    <TopProducts/>
                </div>
            </section>

            {/*<Services />*/}
        </main>
    );
};

export default Home;

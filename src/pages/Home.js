import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Travel from '../assets/travel.png';
import Header from '../components/Header/Header';
import FilterHeader from '../components/FilterHeader/FilterHeader';
import FileMainHeader from '../components/FilterMainHeader/FilterMainHeader';
import InfiniteList from '../components/ScrollableList/ScrollableList';
import Maps from '../components/Maps/Maps';

import './Home.scss';



class Home extends Component {
    render() {
        return (
            <div className="headerSection">
                {/* Navbar */}
                <Header />
                {/* first filter */}
                <FilterHeader />
                {/* second filter */}
                <FileMainHeader />
                {/* map and scroll section */}
                <div className="mapSection">
                    <div style={{ flexBasis: "45%" }}>
                        <InfiniteList />
                    </div>
                    <div>
                        <Maps />
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;
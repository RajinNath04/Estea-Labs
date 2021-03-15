import React from 'react';
import 'antd/dist/antd.css';
import './ScrollableList.scss';
import { List } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { fakeDataUrl } from '../../data/data';



class InfiniteList extends React.Component {

    state = {
        data: fakeDataUrl,
        loading: false,
        hasMore: true,
    };



    handleInfiniteOnLoad = () => {
        let { data } = this.state;
        this.setState({
            loading: true,
        });
        if (data.length > 14) {
            this.setState({
                hasMore: false,
                loading: false,
            });
            return;
        }
    };


    render() {
        return (
            <div className="demo-infinite-container">
                <InfiniteScroll
                    initialLoad={false}
                    pageStart={0}
                    loadMore={this.handleInfiniteOnLoad}
                    useWindow={false}
                >
                    <List
                        dataSource={this.state.data}
                        renderItem={(item) => {
                            let ImageShow = item.image
                            return (<List.Item key={item.id}>
                                <List.Item.Meta
                                    avatar={
                                        <img
                                            width={272}
                                            src={ImageShow}
                                        />
                                    }
                                    title={<h2>{item.location}</h2>}
                                    description={
                                        <div>
                                            <div>
                                                <h6>{item.desc}</h6>
                                            </div>
                                            <div>
                                                <h5 style={{ marginTop: '84px' }}>{item.rating}</h5>
                                            </div>
                                        </div>
                                    }
                                />
                                <div>
                                    <div>
                                        <h3>{item.price}</h3>
                                    </div>
                                    <div style={{ marginTop: '110px' }}>
                                        {item.perNight} for per Night
                                    </div>
                                </div>
                            </List.Item>)
                        }}
                    >

                    </List>
                </InfiniteScroll>
            </div>
        );
    }
}

export default InfiniteList
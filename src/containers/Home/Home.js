import React, { Component } from 'react';
import moment from 'moment';

import './Home.css';

import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox';


class Home extends Component {
    state = {
        tweets,
    };

    publish = tweet => {
        const { tweets } = this.state;

        this.setState({
            tweets: [{
                avatar:'https://pbs.twimg.com/profile_images/1078471113397555200/ro5vaMFW.jpg',
                username: 'bastien',
                fullname: 'Bastien Dev',
                content: tweet,
                date: moment().format('DD/MM/YYYY'),
            },
            ...tweets,
        ], 
        });
    };
    
    remove = index => {
        const { tweets} = this.state;
        this.setState({ tweets: tweets.filter((tweet, i) => i !== index) });
    }

    render() {
        const { tweets } = this.state;

        return (
            <div className="wrapper">
                <div className="homepage col-md-5 mx-auto">
                    <TweetBox publish={this.publish} />
                    <div className="tweets">
                        {tweets.map((tweet, index) => (
                            <Tweet
                                key={index}
                                index={index}
                                remove={this.remove}
                                {...tweet}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
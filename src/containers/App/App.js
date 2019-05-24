import React from 'react';

import './App.css'; 
import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox';
import Home from '../../containers/Home';

console.log(tweets);
const App = () => (
    <Home>
        <TweetBox />
        {tweets.map((tweet, index) => (
            <Tweet {...tweet} key={index} />
        ))};
    </Home>
);

export default App;
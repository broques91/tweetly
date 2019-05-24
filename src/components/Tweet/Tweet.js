import React from 'react';
import PropTypes from 'prop-types'


import './Tweet.css';

const Tweet = ({avatar, fullname, content, username, date}) => (
    <div className="tweet list-group-item">
        <div className="d-flex">
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="data">
                <div className="infos">
                    <strong className="fullname">{fullname}</strong>
                    <small className="text-muted">@{username}</small>
                    <small className="text-muted date">{date}</small>
                </div>
                <div className="content">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    </div>
);

Tweet.propTypes = {
    username: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Tweet;
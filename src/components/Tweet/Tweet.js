import React, { Component } from 'react';
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome';

import './Tweet.css';

class Tweet extends Component{
    static propTypes = {
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        remove: PropTypes.func.isRequired,
    }

    state = {
        isFocus: false,
    }

    handleFocus = ({ type }) => {
        this.setState({ isFocus: type === 'mouseenter' })
    };

    render() {
        const { avatar, fullname, content, username, date, index, remove } = this.props;
        const { isFocus } = this.state; 

        return (
            <div className="tweet list-group-item">
                <div className="d-flex">
                    <div className="avatar">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="data">
                        <div className="infos">
                            <strong className="fullname">{fullname}</strong>
                            <small className="text-muted">@{username}</small>
                            <small className="text-muted mr-2 date">{date}</small>
                            {username === 'bastien' && (
                                <FontAwesome 
                                    className="text-muted trash"
                                    name={isFocus ? 'trash' : 'trash-o'}
                                    onMouseEnter={this.handleFocus}
                                    onMouseLeave={this.handleFocus}
                                    onClick={() =>  remove(index)}
                                />
                            )}
                        </div>
                        <div className="content">
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}  

export default Tweet;
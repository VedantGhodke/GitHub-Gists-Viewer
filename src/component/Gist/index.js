import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Gist extends React.Component {
    render() {
        const { id, owner, forks, tags, url, avatar, description } = this.props.src;

        return <div className="gist-view">
            <div className="img-wrap">
                <img src={avatar} alt={owner}/>
            </div>
            <div className="content-wrap">
                <a target="_blank" href={url} title={description}>{id}</a>
                {
                    tags.length > 0 &&
                    <div className="tags-wrap">
                        {tags.map((tag, index) => <span className="tag" key={`${tag}#${index}`}>{tag}</span>)}
                    </div>
                }

            </div>
            <div className="clear"/>
            {
                forks.length > 0 &&
                <div>
                    <div className="forks-wrap">
                        Forks:
                        <br/>
                        {
                            forks.map(fork =>
                                <div className="img-wrap">
                                    <a href={fork.url} target="_blank">
                                        <img src={fork.avatar} alt="avatar"/>
                                    </a>
                                </div>
                            )
                        }
                    </div>
                    <div className="clear"/>
                </div>
            }
            <div className="clear"/>
        </div>
    }
}

Gist.propTypes = {
    src: PropTypes.shape({
        id: PropTypes.string,
        owner: PropTypes.string,
        forks: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            url: PropTypes.string,
            avatar: PropTypes.string,
        })),
        tags: PropTypes.arrayOf(PropTypes.string),
        url: PropTypes.string,
        avatar: PropTypes.string,
        description: PropTypes.string,
    }),
};
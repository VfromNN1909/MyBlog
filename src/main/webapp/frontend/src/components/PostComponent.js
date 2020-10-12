import React, { Component } from "react";
import { Card } from "shards-react";
import PropTypes from "prop-types";

export class PostComponent extends Component {
    render() {
        const {id, topic, text} = this.props;
        const Post = (
            <div>
                <h4 className="mb-0">
                    <strong>{id}. </strong>{topic}
                </h4>
                <p>{text}</p>
            </div>
        );

        return (
            <Card
                className="mx-auto mt-4 text-center p-5"
                style={{maxWidth: "300px", minHeight: "250px"}}
            >
                { Post }
            </Card>
        )
    }
}

PostComponent.propTypes = {
    id: PropTypes.number,
    topic: PropTypes.string,
    text: PropTypes.string
};

export default PostComponent;
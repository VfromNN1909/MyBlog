import React, {Component} from 'react';
import axios from "axios";

const styles = {
    h1: {
        textAlign: 'center'
    },
    ul: {
        listStyle: 'none',
        padding: '0',
        margin: 0
    }
};

export class PostsComponent extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get("http://localhost:8080/api/v2/posts")
            .then(res => {
                console.log(res.data);
                this.setState({posts: res.data});
            })
    }

    render() {
        return (
            <div>
                <ul style={styles.ul}>
                    {
                        this.state.posts.map(post =>
                            <li key={post.id}>
                                <strong>{post.id}</strong>.
                                {post.topic}
                                <p>
                                    {post.text}
                                </p>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default PostsComponent

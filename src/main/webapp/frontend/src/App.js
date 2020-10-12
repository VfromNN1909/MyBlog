import React, {Component} from "react";
import PostsComponent from "./components/PostsComponent";

const styles = {
    h1: {
        textAlign: 'center'
    }
};

export class App extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.h1}>Blog</h1>
                <PostsComponent />
            </div>
        )
    }
}

export default App;

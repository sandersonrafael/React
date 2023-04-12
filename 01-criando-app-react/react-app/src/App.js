import React from "react";
import "./App.css";

class App extends React.Component {
    state = {
        posts: [
            {
                id: 1,
                title: "Título 1",
                body: "Corpo 1",
            },
            {
                id: 2,
                title: "Título 2",
                body: "Corpo 2",
            },
            {
                id: 3,
                title: "Título 3",
                body: "Corpo 3",
            },
        ],
    };

    render() {
        const { posts } = this.state;
        return (
            <div className="App">
                {posts.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

/* function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Olá mundo!</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
} */

export default App;

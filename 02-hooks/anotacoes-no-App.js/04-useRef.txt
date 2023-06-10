// useRef -> referencia determinado elemento no documento. Necessário utilizar a chave current, como:
// input.current
// para ter acesso ref, é necessário referenciar dentro do elemento desejado, como o
// <input ref={input} />

import P from 'prop-types';
import { useEffect, useState, useMemo, useRef } from 'react';
import './App.css';

const Post = ({ post, handleClick }) => {
    console.log('Filho renderizou');
    return (
        <div key={post.id} className="post">
            <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

Post.propTypes = {
    post: P.shape({
        id: P.number,
        title: P.string,
        body: P.string,
    }),
    handleClick: P.func,
};

function App() {
    const [posts, setPosts] = useState([]);
    const [value, setValue] = useState('');
    const input = useRef(null); // -> está sem nenhuma referência, ainda

    console.log('Pai renderizou!');

    // componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => setPosts(posts));
    }, []);

    useEffect(() => {
        input.current.focus();
        // input.current.blur();
        console.log(input.current);
        // input.current(value);
    }, [value]);

    const handleClick = (value) => {
        setValue(value /* .target.innerText */);
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="App">
            <p>
                <input
                    ref={input}
                    type="search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </p>
            {useMemo(() => {
                return (
                    posts.length > 0 &&
                    posts.map((post) => (
                        <Post
                            key={post.id}
                            post={post}
                            handleClick={handleClick}
                        />
                    ))
                );
            }, [posts])}
            {}
            {posts.length <= 0 && <p>Carregando posts...</p>}
        </div>
    );
}

export default App;

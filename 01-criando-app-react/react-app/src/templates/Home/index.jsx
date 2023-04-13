import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import './styles.css';

export class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 10,
        searchValue: '',
    };

    async componentDidMount() {
        await this.loadPosts();
    }

    loadMorePosts = () => {
        const { posts, allPosts, page, postsPerPage } = this.state;
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextPosts);
        this.setState({ posts, page: nextPage });
    };

    loadPosts = async () => {
        const { page, postsPerPage } = this.state;
        const postsAndPhotos = await loadPosts();
        this.setState({
            posts: postsAndPhotos.slice(page, postsPerPage),
            allPosts: postsAndPhotos,
        });
    };

    handleChange = (e) => {
        const { value } = e.target; // target referencia elemento que realizou o evento
        this.setState({ searchValue: value });
    };

    render() {
        const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
        const noMorePosts = page + postsPerPage >= allPosts.length;

        const filteredPosts = !!searchValue ?
            allPosts.filter((post) => {
                return post.title
                    .toLowerCase()
                    .includes(searchValue.toLocaleLowerCase());
            }) :
            posts;

        return (

            <section className="container">

                <div className="search-container">

                    {!!searchValue && <h1>Search Value: {searchValue}</h1>}

                    <TextInput handleChange={this.handleChange} searchValue={searchValue} />

                </div>

                {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

                {filteredPosts.length === 0 && (
                    <p>Não há postagens correspondentes com a sua busca.</p>
                )}

                <div className="button-container">
                    {!searchValue && !noMorePosts && (
                        <Button
                            text={'Carregar mais...'} click={this.loadMorePosts} disabled={noMorePosts}
                        />
                    )}
                </div>
            </section>
        );
    }
}

import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import './styles.css';

export class Home extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 10,
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

    render() {
        const { posts, page, postsPerPage, allPosts } = this.state;
        const noMorePosts = page + postsPerPage >= allPosts.length;

        return (
            <section className="container">
                <Posts posts={posts} />

                <div className="button-container">
                    <Button
                        text={'Carregar mais...'}
                        click={this.loadMorePosts}
                        // ^ não é o onClick do jsx. É apenas uma propriedade que é passada nas props
                        disabled={noMorePosts}
                    />
                </div>
            </section>
        );
    }
}

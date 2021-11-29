import React from "react"
import PostCard from "../../components/PostCard"
import './styles.css'

import { loadPosts } from '../../utils/loadPosts'
import Search from "../../components/Search"

class MapArray extends React.Component {
    //define o estado inicial
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 10,
        search: ''
    }
    //quando montado
    //recebe os dados de uma api, por exemplo.
    async componentDidMount() {
        await this.loadAllPosts()
    }

    loadAllPosts = async () => {
        const { page, postsPerPage } = this.state
        const postsAddPhotos = await loadPosts()
        this.setState({
            posts: postsAddPhotos.slice(page, postsPerPage),
            allPosts: postsAddPhotos
        })
    }

    //Carregar mais posts
    loadMorePosts = () => {
        const {
            posts,
            allPosts,
            page,
            postsPerPage
        } = this.state
        const nextPage = page + postsPerPage
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts)
        this.setState({
            posts,
            page: nextPage
        })
    }

    handleSearch = (event) => {
        const { value } = event.target
        const { search } = this.state
        this.setState({
            search: value
        })
        console.log(search)
    }

    render() {
        const { posts, search, allPosts } = this.state
        const filteredPosts = !!search ? allPosts.filter(post => {
            return post.title.toLowerCase().includes(search.toLowerCase())
        }) : posts
        return (
            <section
                className="container"
                style={{
                    textAlign: 'center'
                }}
            >
                {!!search && (
                    <h1 className="searchTitle">Buscar por: {search}</h1>
                )}
                <Search handleSearch={this.handleSearch} search={search}  />
                {filteredPosts.length > 0 ?
                    <div className="posts">
                        {filteredPosts.map(post => (
                            <PostCard post={post} key={post.id} />
                        ))}
                    </div>
                    : <div className="noSearch"><p>Nenhum post encontrado :(</p></div>}
                {!search && <button
                    className="btn"
                    style={{
                        marginTop: '30px'
                    }}
                    onClick={this.loadMorePosts}
                    disabled={posts.length === this.state.allPosts.length ? true : false}
                >
                    Mais posts
                </button>}
            </section>
        )
    }

}

export default MapArray

export default function PostCard({post}) {
    return (
        <div className="post">
            <img src={post.cover} alt={post.title} />
            <div className="postsContent">
                <h2>{post.id} - {post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    )
}
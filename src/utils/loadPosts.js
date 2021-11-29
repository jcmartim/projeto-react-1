export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const imagesResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    const [posts, photos] = await Promise.all([postsResponse, imagesResponse])
    const postJson = await posts.json()
    const imageJson = await photos.json()
    const postsAddPhotos = postJson.map((post, index) => {
        return { ...post, cover: imageJson[index].url }
    })
    return postsAddPhotos
}
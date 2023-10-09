
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { IPosts } from '../../types/data'
import { Link } from 'react-router-dom'
const Posts = () => {
    const { id } = useParams()
    const [post, setPost] = useState<IPosts | null>(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [id])

    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const goHome = () => navigate('/', { replace: true }) // плохая практика лучше использовать link
    return (
        <div>
            <button onClick={goBack}>goBack</button>
            <button onClick={goHome}>goHome</button>
            <h1>
                {post?.title}
            </h1>
            <p>
                <b>{post?.id} </b>
                {post?.body}
            </p>

            <Link to={`/blog/${id}/edit`}>edit post</Link>
        </div>
    )
}

export default Posts


import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
    return (
        <div>
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

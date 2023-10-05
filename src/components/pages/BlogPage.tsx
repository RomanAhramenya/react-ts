import { useEffect, useState } from "react"

interface IPosts {
    "userId": number
    "id": number
    "title": string
    "body": string
}

const BlogPage = () => {
    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])
    return (
        <div>
            BlogPage
        </div>
    )
}

export default BlogPage
import React from 'react'
import { useParams } from 'react-router-dom'
const Posts = () => {
    const { id } = useParams()
    return (
        <div>
            {id}
        </div>
    )
}

export default Posts

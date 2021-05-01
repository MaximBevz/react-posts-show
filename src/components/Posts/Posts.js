import {useState, useEffect} from 'react';
import './Posts.scss';
import Post from '../Post/Post';
import PostInfo from "../PostInfo/PosntInfo";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState( null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setPosts([...posts]);
            });
    }, []);

    const showInfo = (id) => {
        const onePost = posts.find(el => el.id === id);

        setPost(onePost);
    }

    const clearInfo = () => {
        if(post !== null) {
            setPost(post = null);
        }
        return;
    }

    return (
        <div className='posts'>
            <ul className='post-list'>
                {
                    posts.map(item =>
                        <Post
                            key={item.id}
                            postTitle={item}
                            showInfo={showInfo}/>)
                }
            </ul>
            <div className='post-info'>
                {
                    post ? <PostInfo post={post} clearInfo={clearInfo}/> : <PostInfo clearInfo={clearInfo}/>
                }
            </div>
        </div>

    );
}
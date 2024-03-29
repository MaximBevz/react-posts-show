import './PostInfo.scss';

export default function PostInfo({post, clearInfo}) {

    return (
            <p className='post-info-body'>
                <b>{post ? post.id + '.' : ''}</b>  {post ? post.body: ''}
                <button
                    className='post-info-btn'
                    onClick={() => clearInfo()}
                >Clear</button>
            </p>
    );
}
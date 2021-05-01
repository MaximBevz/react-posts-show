import './PostInfo.scss';

export default function PostInfo({post, clearInfo}) {

    return (
            <p className='post-info-body'>
                {post}
                <button
                    className='post-info-btn'
                    onClick={() => clearInfo()}
                >Clear</button>
            </p>
    );
}
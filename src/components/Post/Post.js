import './Post.scss';

export default function Post({postTitle, showInfo}) {

    const {title, id} = postTitle;

    return (
        <li className='post-list-item'>
            <div className='post-list-main'>
                <h4 className='post-list-title'>{title}</h4>
                <button
                    className='post-list-btn'
                    onClick={() => showInfo(id)}
                >More Info</button>
            </div>
        </li>
    );
}
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
	return <div>
		posts
		<div>
			<textarea></textarea>
			<button>Add post</button>
		</div>
		<div className={s.posts}>
			<Post message='how are u' likesCount='0'/>
			<Post message='first post' likesCount='0'/>
		</div>
	</div>
		;
}

export default MyPosts;
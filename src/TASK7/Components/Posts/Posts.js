import {useDispatch, useSelector} from "react-redux";
import {
    usePostsFetcher,
    usePostsSetLoading,
    usePostsSetError,
} from "../../src/redux";
import {useEffect} from "react";



export default function Posts() {
    const {posts: {isLoading, posts, error}}= useSelector(( {posts: {isLoading, posts, error}}) => ({posts: {isLoading, posts, error}}));

    const postFetcher = usePostsFetcher();
    const postLoading = usePostsSetLoading();
    const postError = usePostsSetError();

    const fetchPosts = async () => {
        try {
            postLoading();
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
            const payload = await responce.json();
            postFetcher(payload);

        } catch (e) {
            console.log(e, 'eror!');
            postError('NO DATA');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [])

    if (isLoading) {
        return (
            <h1>Loading</h1>
        )
    }
    if (error) {
        return (
            <h1>{error}</h1>
        )
    }

    return <div>{
        posts.map(value => (
            <p key={value.id}>{value.title}</p>
        ))}</div>

}


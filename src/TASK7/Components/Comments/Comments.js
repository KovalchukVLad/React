import {useDispatch, useSelector} from "react-redux";
import {
    useCommentsFetcher,
    useCommentsSetLoading,
    useCommentsSetError,
} from "../../src/redux";
import {useEffect} from "react";



export default function Comments() {
    const {comments: {isLoading, comments, error}}= useSelector(( {comments: {isLoading, comments, error}}) => ({comments: {isLoading, comments, error}}));

    const commentFetcher = useCommentsFetcher();
    const commentLoading = useCommentsSetLoading();
    const commentError = useCommentsSetError();

    const fetchComments = async () => {
        try {
            commentLoading();
            const responce = await fetch('https://jsonplaceholder.typicode.com/comments');
            const payload = await responce.json();
            commentFetcher(payload);

        } catch (e) {
            console.log(e, 'eror!');
            commentError('NO DATA');
        }
    };

    useEffect(() => {
        fetchComments();
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
        comments.map(value => (
            <p key={value.id}>{value.name}</p>
        ))}</div>

}


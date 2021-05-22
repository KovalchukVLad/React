import {useSelector} from "react-redux";
import {useUsersFetcher, useUsersSetError, useUsersSetLoading} from "../../src/redux";
import {useEffect} from "react";

export default function Users() {
    const {users: {isLoading, users, error}} = useSelector(( {users: {isLoading, users, error}}) => ({users: {isLoading, users, error}}));

    const userFetcher = useUsersFetcher();
    const userLoading = useUsersSetLoading();
    const userError = useUsersSetError();

    const fetchUsers = async () => {
        try {
            userLoading();
            const responce = await fetch('https://jsonplaceholder.typicode.com/users');
            const payload = await responce.json();

            userFetcher(payload);


        } catch (e) {
            console.log(e, 'eror!');
            userError('NO DATA');
        }
    };

    useEffect(() => {
        fetchUsers();
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
        users.map(value => (
            <p key={value.id}>{value.name}</p>
        ))}</div>

}


import { useParams } from "react-router";

export default function Details() {
    const { itemId } = useParams();
    return (
        <>
            <h1>Details view</h1>
            <h1>{itemId}</h1>
        </>
    );
}
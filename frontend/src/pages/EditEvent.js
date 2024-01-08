import { useParams } from "react-router-dom"

const EditEventPage = () => {
    const params = useParams();
    return <h1>Editing event number {params.eventId}</h1>
}

export default EditEventPage;
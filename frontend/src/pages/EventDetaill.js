import { useParams } from "react-router-dom";

const EventDetailPage = () => {
const params = useParams();

    return <h1>Events detail page {params.eventId}</h1>
}

export default EventDetailPage;
import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = (event) => {
    const data = useLoaderData();
    
    return <EventItem event={data.event} />
}

export default EventDetailPage;

export async function loader  ({request, params})  {
    const id = params.eventId;

    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        throw json({ message: "couldn't fetch data for selected event" }, { status: 500 })
    } else {
        return response;
    }


}
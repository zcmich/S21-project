import { json, useLoaderData } from "react-router-dom"
import EventForm from './../components/EventForm';

const EditEventPage = () => {
    const data = useLoaderData();
    return <EventForm event={data.event}/>
}

export default EditEventPage;

export async function loader  ({request, params})  {
    const id = params.eventId;

    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        throw json({ message: "couldn't fetch data for selected event" }, { status: 500 })
    } else {
        return response;
    }


}
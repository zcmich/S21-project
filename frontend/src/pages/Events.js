import EventsList from '../components/EventsList';
import { useLoaderData,json } from 'react-router-dom';

function EventsPage() {
    const data = useLoaderData()
    const events = data.events;
    return (
        <>
            {<EventsList events={events} />}
        </>
    );
}

export default EventsPage;


export const loader = async () => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // throw new Response (JSON.stringify({message: "couldn't fetch data"}), {status: 500});
        return json(
            {message: "couldn't fetch data"},
            {status: 500}
        );
    } else {
        return response;
    }
}
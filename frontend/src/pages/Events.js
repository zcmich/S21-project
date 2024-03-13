import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

function EventsPage() {
    const { events } = useLoaderData()
    // const { events } = data.events;
    return (    //display fallback while waiting for events to be fetched.
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}> 
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // throw new Response (JSON.stringify({message: "couldn't fetch data"}), {status: 500});
        return json(
            { message: "couldn't fetch data" },
            { status: 500 }
        );
    } else {
        // return response;
        const resData = await response.json();
        return resData.events;
    }
}


export const loader = () => {
    return defer({
        events: loadEvents(),
    })
}
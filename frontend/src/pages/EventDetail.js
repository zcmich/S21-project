import { useRouteLoaderData, json, redirect, defer, Await } from 'react-router-dom';

import EventItem from '../components/EventItem';
import { Suspense } from 'react';
import EventsList from '../components/EventsList';

function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail');
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent}/>}
        </Await>
      </Suspense>


      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>

  )

  // return <EventItem event={data.event} />;
}

export default EventDetailPage;

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

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resdata = await response.json();
    return resdata.event;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;
  return defer({
    event: await loadEvent(id), //wait for events detail tooôbe loaded first before rendering page
    events: loadEvents()

  })
}



export async function action({ request, params }) {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method
  });
  if (!response.ok) {
    throw json(
      { message: 'Could not delete selected event.' },
      {
        status: 500,
      }
    );
  } else {
    return redirect('/events');
  }
}
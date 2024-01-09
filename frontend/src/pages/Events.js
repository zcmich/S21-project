import { Link } from "react-router-dom";
import EventsList from "../components/EventsList";

const DUMMY_EVENTS = [
    { id: 'e1', title: 'event-1', date:'d1', image: 'images/event'},
    { id: 'e2', title: 'event-2', date:'d2', image: 'images/event'} ,
    { id: 'e3', title: 'event-3', date:'d3', image: 'images/event'} 
]

const EventsPage = () => {
    return <>
        <h1>Events page</h1>
        {DUMMY_EVENTS.map(event => (
            <li>
                <Link to={`${event.id}`} >{event.title}</Link>
            </li>
        ))}

        <EventsList events={DUMMY_EVENTS} />

    </>
};

export default EventsPage;
import { useSelector } from 'react-redux';

import { IState } from '../types/types';

function Events() {
  const { currentUser } = useSelector((state: IState) => state);

  return (
    <div className='event'>
      {currentUser?.events ? (
        currentUser?.events?.map((event) => (
          <a href={event.link} key={event.id} className='event-item'>
            {event.content && <img src={`./${event.content}.png`} alt='content' />}
            <div className='event-content'>
              <div>{event.text}</div>
              <div className='event-info'>
                <div>
                  <img src='./icons-svg/camera.svg' alt='content' />
                  {event.type}
                </div>
                <div>
                  <img src='./icons-svg/calendar.svg' alt='content' />
                  {event.date}
                </div>
                <div>
                  <img src='./icons-svg/clock.svg' alt='content' />
                  {event.time}
                </div>
              </div>
            </div>
          </a>
        ))
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
}

export default Events;






import { useSelector } from 'react-redux';

import { IState } from '../types/types';

function Video() {
  const { currentUser } = useSelector((state: IState) => state);

  return (
    <div className='video'>
      {currentUser?.video ? (
        currentUser?.video?.map((item) => (
          <a href={item.link} className='video-item' key={item.id}>
            <div>{item.content && <img src={`./${item.content}.png`} alt='content' />}</div>
            <div className='video-info'>
              <div className='video-left-info'>
                <div>{item.name}</div>
                <div className='video-author'>{item.author}</div>
              </div>
              <div className='video-date'>{item.date}</div>
            </div>
          </a>
        ))
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
}

export default Video;






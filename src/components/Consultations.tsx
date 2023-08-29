import { useSelector } from 'react-redux';

import { IState } from '../types/types';

function Consultations() {
  const { currentUser } = useSelector((state: IState) => state);

  return (
    <div className='consultations'>
      {currentUser?.consultations ? (
        currentUser?.consultations?.map((consultation) => (
          <div key={consultation.id} className='consultations-item'>
            <div className='consultations-info'>
            <img src={`./icons-svg/${consultation.content}.svg`} alt='content' />
            <div className='consultations-text'>
              <div>
                {consultation.text}
                <div>
                  {consultation.date}
                  {' '}
                  {consultation.time}
                </div>
              </div>
              {!consultation.status && <span className='warning'>Не подтверждена</span>}
            </div>
            </div>
          </div>
        ))
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
}

export default Consultations;

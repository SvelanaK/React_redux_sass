import { useState } from 'react';

import { INotionProps } from '../types/types';

function NotionItem({ notion }: INotionProps) {
  const [openNotion, setOpenNotion] = useState(false);
  return (
    <div className='notion-item'>
      <div className='notion-info'>
        <div>
          <span>{notion.date}</span>
          {notion.text}
        </div>
        <button className={`more-button ${openNotion ? 'more-button-active' : ''}`} onClick={() => setOpenNotion(!openNotion)}></button>
        {openNotion &&
          <ul className='modal-more'>
            <li>Изменить</li>
            <li>Удалить</li>
          </ul>
        }
      </div>
      {notion.content && <img src={notion.content} className='notion-content' alt='content' />}
    </div>
  );
}

export default NotionItem;
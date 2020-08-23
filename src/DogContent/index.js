import React from 'react';
import './style.scss';
import useDogContent from './useDogContent';
import cx from 'classnames';

function DogContent() {
const {waitImage, catchData} = useDogContent();

const hasImage = cx({
  emptyData: waitImage
})

  return (
    <section>
      <div className="imageBg">
        <span className={hasImage}>
          <div className="dogs-img">
          </div>
        </span>

      </div>

      <button onClick={catchData}>Me mostre um dog aleatório</button>
    </section>
  );
}

export default DogContent;

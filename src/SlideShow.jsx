import React from 'react';
import ReactDOM from 'react-dom';
import { images } from './images';
import './index.css';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const INITIAL_INDEX = 0

function SlideShow() {
    const [index, setIndex] = React.useState(INITIAL_INDEX)

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (index === images.length - 1) {
                setIndex(INITIAL_INDEX)
            }
            else {
                setIndex(index + 1)
            }
        }, 5000)
        return () => clearInterval(interval)
    }, [index])

    return (
        <Gallery
            style={{
                height: '77vh',
                widows: '70vw',
                background: 'black'
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}
        >
            {images.map(image => (
                <GalleryImage objectFit="contain" src={image} />
            ))}
        </Gallery>
    );
}

export default SlideShow;
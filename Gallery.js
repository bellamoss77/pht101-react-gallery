import React, { useState } from 'react';
import ImageTile from './ImageTile';
import Lightbox from './Lightbox';
import LikedImages from './LikedImages';
import { images } from './images';
import { dividerClasses } from '@mui/material';

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openLightbox = (image) => {
        setCurrentImage(image);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setCurrentImage(null);
    };

    return (
        <div>
            <div className='gallery'>
                {images.map((image, index) => (
                    <ImageTile key={index} image={image} onClick={() => openLightbox(image)} />
                ))}
            </div>
            {lightboxOpen && (
                <Lightbox
                image={currentImage}
                onClose={closeLightbox}
                onNavigate={setCurrentImage}
                />
            )}
            <LikedImages />
        </div>
    );
};

export default Gallery;
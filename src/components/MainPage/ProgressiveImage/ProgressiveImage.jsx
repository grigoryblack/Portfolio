import {useEffect, useState} from 'react';
import './_progressive-image.scss'

const ProgressiveImage = ({ src, width, placeholderSrc, onLoad, className }) => {
    const [imageSrc, setImageSrc] = useState(placeholderSrc);

    const handleImageLoad = () => {
        setImageSrc(src);
        if (onLoad) {
            onLoad();
        }
    };

    const cn = `${className} ${
        imageSrc === placeholderSrc ? "loading" : "loaded"
    }`;

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
        };
    }, [src]);

    return (
        <img
            src={imageSrc}
            data-src={src}
            width={width}
            alt="progressive"
            className={className}
            onLoad={handleImageLoad}
        />
    );
};

export default ProgressiveImage;
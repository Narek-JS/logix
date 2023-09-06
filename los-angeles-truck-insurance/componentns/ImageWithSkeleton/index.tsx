import { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Image, { ImageProps } from 'next/image';

interface ImageWithSkeletonProps extends ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    skeletonWidth?: number;
    skeletonHeight?: number;
}

const ImageWithSkeleton: FC<ImageWithSkeletonProps> = ({
    src,
    alt,
    width,
    height,
    skeletonWidth,
    skeletonHeight,
    ...restProps
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageLoaded(false);
    };

    return (
        <div style={{ position: 'relative', width, height }}>
            {!imageLoaded && (
                <Skeleton
                    width={skeletonWidth || width}
                    height={skeletonHeight || height}
                    borderRadius={20}
                />
            )}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ position: 'absolute', top: 0, left: 0 }}
                onLoad={handleImageLoad}
                onError={handleImageError}
                {...restProps}
            />
        </div>
    );
};

export { ImageWithSkeleton };

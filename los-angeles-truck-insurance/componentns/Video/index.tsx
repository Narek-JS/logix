import YouTube from 'react-youtube';
import classes from './index.module.css';

interface IProps {
    id: string;
    from?: 'right' | 'left' | 'bottom' | 'top';
    height?: string;
    width?: string; 
};

export const Video: React.FC<IProps> = ({
    id,
    from,
    height = "400px",
    width = "100%"
}) => {
    return (
        <div
            className={classes['rounded-video']}
            style={{
                ...(width && {
                    maxWidth: width,
                    width,
                }),
                ...(height && {
                    maxHeight: height,
                })
            }}
            {...(from && { from })}
        >
            <YouTube
                videoId={id}
                opts={{
                    height,
                    width: '100%',
                    playerVars: {
                        autoplay: 0,
                    },
                }}
                className='player'
            />
        </div>
    );
};
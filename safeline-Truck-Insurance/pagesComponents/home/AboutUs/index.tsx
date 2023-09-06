import classes from './index.module.css';

const AboutUs: React.FC = () => {

    return (
        <div className={classes.aboutUs}>
            <div className={classes.title}>
                <h1>About us</h1>
                <p>
                    <span>Welcome to Safeline</span>
                    <span>Truck Insurance</span>
                </p>
            </div>
            <div className={classes.row}/>
            <div className={classes.description}>
                <p>
                    SafeLine Truck Insurance is your reliable and trusted commercial truck insurance agency. For over a decade, we’ve been helping families and businesses both large and small get optimized coverage that protects them in all possible situations.
                </p>
                <p>
                    We are one of the leading providers of commercial insurance in the U.S., and we understand your coverage needs!
                </p>
            </div>
        </div>
    );
};

export { AboutUs };
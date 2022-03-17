import {useParams} from 'react-router-dom';
import classes from './TitlePage.module.css';

const TitlePage = () => {
    const params = useParams();
    
    return <h2 className={classes.h2}>{params.title}</h2>
}

export default TitlePage;
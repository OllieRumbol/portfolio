import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import Pdf from '../assets/Oliver Bourne CV.pdf';
import '../style/Cv.css';

export default function Cv() {
    const history = useHistory();

    useEffect(() => {
        if(isMobile){
            document.getElementById('mobileLink').click();
            history.push("/");
        }
        else{
            document.getElementById('webLink').click();
        }
    }, [history]);

    if(isMobile){
        return (<a id='mobileLink' href={Pdf} target='_blank' rel='noreferrer' className='hideLink' download>CV</a>);
    }
    else{
        return (<a id='webLink' href={Pdf} className='hideLink'>CV</a>);
    }
}
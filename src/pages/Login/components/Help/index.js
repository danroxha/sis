import React, {useState} from 'react';
import {ButtonLink} from '../../../../components/Button';

import './style.css';

export default function Help(){
    
    const [emailSupport, setEmailSupport] = useState('');
    const [phoneSupport, setPhoneSupport] = useState('');

    const getPhoneAndEmailDataBase = async()=>{
        // IMPLEMETART AJAX

        setEmailSupport('example@example.com');
        setPhoneSupport('(99) 99999-9999');
    
    }
    
    window.onload = getPhoneAndEmailDataBase;
    
    return (
        <>
            <section id='support'>
                <article>
                    <h2>Suporte</h2>
                    <address>
                        <ButtonLink
                            classNames = 'button-phone'
                            href= {`mailto:${emailSupport}`}
                        >
                          {emailSupport}
                        </ButtonLink>
                        <span>
                            <a href={`tel:${phoneSupport}`}>{phoneSupport}</a>
                            <a href={`tel:${phoneSupport}`}>{phoneSupport}</a>
                        </span>    
                    </address>
                </article>
            </section>
            <section id='about'>
                <article>    
                    <h2>Sobre</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec commodo iaculis est, eget consectetur orci elementum sit amet.
                        Vestibulum molestie arcu enim, id vestibulum lorem fringilla nec.  
                    </p>
                </article>
            </section>
        </>
    );
}
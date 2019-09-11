import React from 'react';
import {Button} from '../../../../../components/Button';
import {Form, Input} from '../../../../../components/Form';
import List from '../../../../../components/List';


export default function SectionSecondary(){

    let datas = [
        {text : 'Daniel'}
    ]

    return(
        <section>
            <List
                title = {'CHAMADAS'}
                data = {datas}
            />
        </section>
    );
}
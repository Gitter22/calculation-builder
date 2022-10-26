import React from 'react'
import { List } from 'antd';
import * as schemas from './schemas'
import { FB_Actions } from '../formschemaReducer'
import { Field } from '@data-driven-forms/react-form-renderer';

interface FormComponentsProps {
    dispatch: React.Dispatch<FB_Actions>
}

export const componentTypes = [{
    label: 'Short Answer',
    type: 'SHORT_ANSWER',
    schema: schemas.shortAnswer,
}, {
    label: 'Drop Down',
    type: 'DROP_DOWN',
    schema: schemas.dropDown,
}, {
    label: 'Multiple Choice',
    type: 'MULTIPLE_CHOICE',
    schema: schemas.multipleChoice,
}, {
    label: 'Check box',
    type: 'CHECK_BOX',
    schema: schemas.checkBox,
},
]




function FormComponents({ dispatch }: FormComponentsProps) {

    function handleClick(fieldSchema: Field) {
        dispatch({ type: 'field_added', field: fieldSchema })
    }

    return (
        <>
            <h2>Question types</h2>
            <List
                itemLayout="horizontal"
                dataSource={componentTypes}
                renderItem={(item) => (
                    <List.Item onClick={() => handleClick(item.schema)}>
                        <List.Item.Meta
                            title={item.label}
                        />
                    </List.Item>
                )}
            />
        </>
    )
}

export default FormComponents
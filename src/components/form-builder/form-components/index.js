import React from 'react'
import { List } from 'antd';
import * as schemas from './schemas'
import { FB_ACTIONS } from '../formschemaReducer'

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




function FormComponents({ dispatch }) {

    function handleClick(fieldSchema) {
        dispatch({ type: FB_ACTIONS.FIELD_ADDED, field: fieldSchema })
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
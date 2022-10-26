import React from 'react'
import { Button, Input, Space } from 'antd'
import { FB_Actions } from '../formschemaReducer'
import OptionAdder from './OptionAdder'
import { Field } from '@data-driven-forms/react-form-renderer'

type PropertiesTabProps = {
    field: Field,
    dispatch: React.Dispatch<FB_Actions>
}

function PropertiesTab({ field, dispatch }: PropertiesTabProps) {


    function handleLabelChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        dispatch({ type: 'label_changed', label: e.target.value })
    }

    function handleKeyChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        dispatch({ type: 'name_changed', name: e.target.value })
    }

    function handleRemove() {
        dispatch({ type: 'field_deleted' })
    }

    function handleOptionsChange() {
    }

    return (
        <div style={{ padding: "5px" }}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Button block type='primary' onClick={handleRemove}>Remove</Button>
                <label>
                    Enter Question or Label
                    <Input
                        placeholder='Enter label here...'
                        onChange={handleLabelChange}
                        value={field?.label || ''}
                    />
                </label>
                <label>
                    Enter Unique Identifier(key) for this question
                    <Input
                        placeholder='Enter question key...'
                        onChange={handleKeyChange}
                        value={field?.name || 'blah'}
                    />
                </label>
                <div>
                    <OptionAdder options={field?.options} onChange={handleOptionsChange} />
                </div>
            </Space>
        </div>
    )
}

export default PropertiesTab
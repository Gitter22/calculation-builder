import React, { useState } from 'react'
import { Button, Input, Space } from 'antd'
import { FB_Actions } from '../formschemaReducer'
import OptionAdder from './OptionAdder'
import { Field } from '@data-driven-forms/react-form-renderer'
import { token } from '../../Utils/token'

type PropertiesTabProps = {
    field: Field,
    dispatch: React.Dispatch<FB_Actions>
}

function PropertiesTab({ field, dispatch }: PropertiesTabProps) {

    const [tokenError, setTokenError] = useState('')
    const [name, setName] = useState('')

    function handleLabelChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: 'label_changed', label: e.target.value })
    }
    function handleKeyChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTokenError('')
        try {
            const name = token.generate(e.target.value)
            setName(name)
            console.log("🚀 ~ file: PropertiesTab.tsx ~ line 26 ~ handleKeyChange ~ name", name)
            dispatch({ type: 'name_changed', name: e.target.value })
        } catch (err: any) {
            setTokenError(err?.message)
            dispatch({ type: 'name_changed', name: e.target.value })
            console.log(err)
        }
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
                        value={field?.name || ''}
                    />
                </label>
                <span style={{ color: 'red' }}>{tokenError}</span>
                <span style={{ color: 'blue' }}>{name}</span>

                <div>
                    <OptionAdder options={field?.options} onChange={handleOptionsChange} />
                </div>
            </Space>
        </div>
    )
}

export default PropertiesTab
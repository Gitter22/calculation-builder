import React from 'react'
import { Field } from '@data-driven-forms/react-form-renderer'
import { Checkbox, Space } from 'antd'
import { FB_Actions } from '../formschemaReducer'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

type ValidationsTabProps = {
    field: Field,
    dispatch: React.Dispatch<FB_Actions>
}


function ValidationsTab({ field, dispatch }: ValidationsTabProps) {

    function handleIsRequired(e: CheckboxChangeEvent) {
        console.log(e.target.checked)
        dispatch({ type: 'isRequired_changed', isRequired: e.target.checked })
    }

    return (
        <div style={{ padding: "5px" }}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <label>
                    Is Required?
                    <Checkbox
                        style={{ padding: "5px" }}
                        onChange={handleIsRequired}
                        checked={field?.isRequired}
                    />
                </label>
            </Space>
        </div>
    )
}

export default ValidationsTab
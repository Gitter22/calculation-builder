import { Checkbox, Space } from 'antd'
import React from 'react'
import { FB_ACTIONS } from '../formschemaReducer'

function ValidationsTab({ field, dispatch }) {

    function handleIsRequired(e) {
        console.log(e.target.checked)
        dispatch({ type: FB_ACTIONS.ISREQUIRED_CHANGED, isRequired: e.target.checked })
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
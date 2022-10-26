import React from 'react'
import { Tabs } from 'antd'
import PropertiesTab from './PropertiesTab'
import ValidationsTab from './ValidationsTab'
import { FB_Actions } from '../formschemaReducer'
import { Field } from '@data-driven-forms/react-form-renderer'

type ConfigureComponentProps = {
    dispatch: React.Dispatch<FB_Actions>,
    field: Field
}

function ConfigureComponent({ dispatch, field }: ConfigureComponentProps) {

    console.log("🚀 ~ file: index.js ~ line 7 ~ ConfigureComponent ~ schema", field)
    return (
        <div>
            <h2> Edit Question properties</h2>
            <Tabs
                defaultActiveKey="1"
                items={[
                    {
                        label: `Properties`,
                        key: '1',
                        children: <PropertiesTab dispatch={dispatch} field={field} />,
                    },
                    {
                        label: `Validations`,
                        key: '2',
                        children: <ValidationsTab dispatch={dispatch} field={field} />,
                    },
                    {
                        label: `Advanced`,
                        key: '3',
                        children: `Content of Tab Pane 3`,
                    },
                ]}
            />
        </div>
    )
}

export default ConfigureComponent
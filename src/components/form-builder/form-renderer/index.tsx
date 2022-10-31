import React from 'react'
import { FB_Actions, FormSchema } from '../formschemaReducer';
import { FormTemplateRenderProps } from '@data-driven-forms/react-form-renderer';

import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import { componentTypes } from '@data-driven-forms/react-form-renderer';
import { Select, Checkbox, Radio, ComponentMapper } from '@data-driven-forms/ant-component-mapper';
import FormTemplate from '@data-driven-forms/ant-component-mapper/form-template'



interface FormPreviewProps {
    schema: FormSchema,
    dispatch: React.Dispatch<FB_Actions>
}

const componentMapper: ComponentMapper = {
    // [componentTypes.TEXT_FIELD]: TextField,
    [componentTypes.CHECKBOX]: Checkbox,
    [componentTypes.RADIO]: Radio,
    [componentTypes.SELECT]: Select
}

const BasicFormTemplate = (props: FormTemplateRenderProps) => <FormTemplate {...props} />



function FormPreview({ schema, dispatch }: FormPreviewProps) {
    console.log("🚀 ~ file: index.tsx ~ line 29 ~ FormPreview ~ schema", schema)

    function handleSelect(index: number) {
        dispatch({ type: 'set_selected', index })
    }


    return (
        <div >
            <h2>Preview Area</h2>
            {schema.fields.map((field, index) => (
                <div
                    style={{
                        border: `1px solid ${schema.selected === index ? 'red' : ''}`,
                        margin: "5px",
                        padding: "5px"
                    }}
                    key={index}
                    onClick={() => handleSelect(index)}
                >
                    <FormRenderer
                        FormTemplate={BasicFormTemplate}
                        componentMapper={componentMapper}
                        schema={{ fields: [field] }}
                        onSubmit={console.log}
                        onCancel={() => console.log('Cancel action')}
                    />
                </div>))}

        </div>
    )
}

export default FormPreview
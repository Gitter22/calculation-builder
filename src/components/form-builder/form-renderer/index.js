import React from 'react'


import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';

import { componentMapper } from '@data-driven-forms/ant-component-mapper';
import { useFormApi } from '@data-driven-forms/react-form-renderer';

const FormTemplate = ({ schema, formFields }) => {
    const { handleSubmit } = useFormApi();

    return (
        <form onSubmit={handleSubmit}>
            {schema.title}
            {formFields}
            <button type="submit">Submit</button>
        </form>
    )
}

function FormPreview({ schema }) {
    return (
        <>
            <h2>Preview Area</h2>
            <FormRenderer
                FormTemplate={FormTemplate}
                componentMapper={componentMapper}
                schema={schema}
                onSubmit={console.log}
                onCancel={() => console.log('Cancel action')}
            />
        </>
    )
}

export default FormPreview
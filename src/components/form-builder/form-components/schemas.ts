import componentTypes from '@data-driven-forms/react-form-renderer/component-types';


export const shortAnswer = {
    component: componentTypes.TEXT_FIELD,
    name: "text-field-1666082928259",
    label: 'Your question....',
    condition: {
        "and": []
    },
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    validate: [
        {
            "type": "required"
        },
    ],
    initializeOnMount: false,
    clearOnUnmount: false
}

export const dropDown = {
    component: "select",
    label: '',
    name: "select",
    simpleValue: true,
    options: [
        {
            "label": "Dogs",
            "value": "1"
        },
        {
            "label": "Cats",
            "value": "2"
        },
        {
            "label": "Hamsters",
            "value": "3"
        }
    ]

}

export const multipleChoice = {
    component: "radio",
    label: '',
    name: "checkbox",
    options: [
        {
            "label": "Dog",
            "value": "1"
        },
        {
            "label": "Cats",
            "value": "2"
        },
        {
            "label": "Hamsters",
            "value": "3"
        }
    ]
}

export const checkBox = {
    component: "checkbox",
    label: "Checkbox",
    name: "checkbox",
    options: [
        {
            "label": "Dog",
            "value": "1"
        },
        {
            "label": "Cats",
            "value": "2"
        },
        {
            "label": "Hamsters",
            "value": "3"
        }
    ]
}
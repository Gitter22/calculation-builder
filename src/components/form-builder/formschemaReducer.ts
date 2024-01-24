import { Field } from "@data-driven-forms/react-form-renderer"


export type FB_Actions =
    { type: 'field_added'; field: any }
    | { type: 'field_deleted' }
    | { type: 'set_selected', index: number }
    | { type: 'label_changed', label: string }
    | { type: 'name_changed', name: string }
    | { type: 'options_changed', options: string[] }
    | { type: 'isRequired_changed', isRequired: boolean }

export interface FormSchema {
    title: string,
    fields: Field[],
    selected: number | undefined
}

export const initialSchema = {
    title: 'Find my Subsidies',
    fields: [],
    selected: 0
}

export function formSchemaReducer(state: FormSchema, action: FB_Actions) {
    switch (action.type) {

        case 'field_added': {
            return {
                ...state,
                fields: [...state.fields, action.field]
            }
        }
        case 'field_deleted': {
            const updatedFields = state.fields.filter((field, index) => index !== state.selected)
            return {
                ...state,
                fields: updatedFields
            }
        }
        case 'set_selected': {
            return {
                ...state,
                selected: action.index
            }
        }
        case 'label_changed': {
            const updatedFields = state.fields.map((field, index) => {
                if (state.selected === index) {
                    return { ...field, label: action.label }
                } else {
                    return field
                }
            })
            return {
                ...state,
                fields: updatedFields
            }
        }
        case 'name_changed': {
            const updatedFields = state.fields.map((field, index) => {
                if (state.selected === index) {
                    return { ...field, name: action.name }
                } else {
                    return field
                }
            })
            return {
                ...state,
                fields: updatedFields
            }
        }
        case 'isRequired_changed': {
            const updatedFields = state.fields.map((field, index) => {
                if (state.selected === index) {
                    return { ...field, isRequired: action.isRequired }
                } else {
                    return field
                }
            })
            return {
                ...state,
                fields: updatedFields
            }
        }
        default: {
            throw Error
        }
    }
}
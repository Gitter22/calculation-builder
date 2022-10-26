export const FB_ACTIONS = {
    FIELD_ADDED: 'FIELD_ADDED',
    FIELD_DELETED: 'FIELD_DELETED',
    SET_SELECTED: 'SET_SELECTED',
    LABEL_CHANGED: 'LABEL_CHANGED',
    NAME_CHANGED: 'NAME_CHANGED',
    OPTIONS_CHANGED: 'OPTIONS_CHANGED',
    ISREQUIRED_CHANGED: 'ISREQUIRED_CHANGED'
}

export const initialSchema = {
    title: 'Find my Subsidies',
    fields: [],
    selected: undefined
}

export function formSchemaReducer(state, action) {
    switch (action.type) {

        case FB_ACTIONS.FIELD_ADDED: {
            return {
                ...state,
                fields: [...state.fields, action.field]
            }
        }
        case FB_ACTIONS.FIELD_DELETED: {
            const updatedFields = state.fields.filter((field, index) => index !== state.selected)
            return {
                ...state,
                fields: updatedFields
            }
        }
        case FB_ACTIONS.SET_SELECTED: {
            return {
                ...state,
                selected: action.index
            }
        }
        case FB_ACTIONS.LABEL_CHANGED: {
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
        case FB_ACTIONS.NAME_CHANGED: {
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
        case FB_ACTIONS.ISREQUIRED_CHANGED: {
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
export const token = {
    inputRegEx: /^[a-zA-Z][a-zA-Z0-9\s]{0,29}$/,
    tokenRegEx: /^[a-zA-Z][a-zA-Z0-9]{0,29}$/,


    validateInput(trimmedInput) {
        console.log(!trimmedInput.match(/^[a-zA-Z]/))
        if (trimmedInput === 0) {
            throw new Error('Input is empty')
        } else if (trimmedInput.length > 30) {
            throw new Error('Input is too long! Max characters:30')
        } else if (!trimmedInput.match(/^[a-zA-Z]/)) {
            throw new Error('First Character of Input is not an uppercase or lowercase letter')
        } else if (trimmedInput.match(/[^a-zA-Z0-9\s]/)) {
            throw new Error('Input should not contain special characters')
        } else if (!this.inputRegEx.test(trimmedInput)) {
            throw new Error('Input does not match criteria specified')
        } else {
            return trimmedInput
        }
    },
    validateToken(inputToken) {
        return this.tokenRegEx.test(inputToken)
    },

    capitalizeFirstLetterAfterSpace(trimmedInput) {
        console.log(trimmedInput.match(/(\s[a-zA-Z0-9])/g))
        return trimmedInput.replace(/(\s[a-zA-Z0-9])/g, (str) => {
            let trimmedCharacter = str.trim()
            if (typeof trimmedCharacter === 'string') {
                return trimmedCharacter.toUpperCase()
            } else {
                return trimmedCharacter
            }
        })
    },
    capitalizeFirstLetter(trimmedInput) {
        return trimmedInput.replace(/^[a-z]/, (u) => u.toUpperCase());
    },

    generate(input) {
        const trimmedInput = input.trim()
        return this.capitalizeFirstLetterAfterSpace(this.capitalizeFirstLetter(this.validateInput(trimmedInput)))
    },
}
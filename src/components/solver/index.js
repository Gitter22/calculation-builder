
const calculationSchema = {
}
const userData = {
    principal: 50000
}
const solver = {
    solve(calculationSchema, userData) {
        const parser = new Parser()  //using hot-formula-parser
        const steps = calculationSchema.steps //array
        Object.entries(userData).forEach((key, value) => {
            parser.setVariable(key, value)
        })
        let result = { value: 0, remarks: '' }
        steps.forEach(step => {
            parser.parse(step)
        })

        return result
    }
}
solver.solve(calculationSchema, userData) //result

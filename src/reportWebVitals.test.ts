import * as reportWebVitals from "./reportWebVitals"
// @ponicode
describe("reportWebVitals.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            reportWebVitals.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

describe("Nuestro promer test", () => {
    it("Debe revisar 1 + 1 = 2", () => {
        expect(1 + 1).toBe(2)
    })
    it("Debe revisar 1 + 1 no sea 3", () => {
        expect(1 + 1).not.toBe(3)
    })
})
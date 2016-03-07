import { factory } from "industry"
import { instance } from "../../"

describe("instance", () => {
  let test, id

  function makeTest(id) {
    return factory()
      .set("instance", instance)
      .base(class {
        constructor() {
          this.id = id
          this.rand = Math.random()
        }
      })
  }

  beforeEach(() => {
    id = Math.random()
    test = makeTest(id)
  })

  it("sets the id and rand properties to numbers", () => {
    expect(test().id).toEqual(jasmine.any(Number))
    expect(test().rand).toEqual(jasmine.any(Number))
  })

  it("returns an instance of the factory class", () => {
    expect(test().id).toEqual(id)
  })

  it("returns the same instance of the factory class", () => {
    expect(test().id).toEqual(id)
    expect(test().id).toEqual(id)
  })

  it("returns a different instance of the factory class (across factory)", () => {
    let id2 = Math.random()
    let test2 = makeTest(id2)
    expect(test().id).toEqual(id)
    expect(test2().id).toEqual(id2)
  })

  it("returns a different instance of the factory class (by key)", () => {
    expect(test().rand).not.toEqual(test("key").rand)
  })

  it("returns a different instance of the factory class (across factory by key)", () => {
    let id2 = Math.random()
    let test2 = makeTest(id2)
    expect(test("key").rand).not.toEqual(test2("key").rand)
  })

  it("accepts other parameters to factory function", () => {
    expect(test(true).rand).toEqual(test(true).rand)
    expect(test("a", true).rand).toEqual(test("a", false).rand)
    expect(test("a", true).rand).not.toEqual(test("b", false).rand)
  })

  it("calls super without the key", () => {
    test = test.base(class {
      constructor(...args) {
        expect(args).toEqual([ "hello" ])
      }
    })
    test("key", "hello")
  })
})

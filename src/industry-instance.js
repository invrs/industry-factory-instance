export let instance = Class =>
  class extends Class {
    static factory(...args) {
      let key = "default"

      if (typeof args[0] == "string") {
        key = args.shift()
      }

      let value = this[key]

      if (args[0] === null) {
        value = new this(...args)
      } else if (!value) {
        value = this[key] = new this(...args)
      }
      
      if (super.factory) {
        super.factory(...args)
      }
      
      return value
    }
  }

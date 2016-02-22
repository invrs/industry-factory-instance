export let factory_instance = Class =>
  class extends Class {
    static factory(...args) {
      let key = "default"

      if (typeof args[0] == "string") {
        key = args.shift()
      }
      
      if (!this[key]) {
        this[key] = new this(...args)
      }
      
      if (super.factory) {
        super.factory(...args)
      }
      
      return this[key]
    }
  }

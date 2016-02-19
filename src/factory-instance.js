export default Class =>
  class extends Class {
    static factory(...args) {
      let key = "default"

      if (typeof args[0] == "string") {
        key = args[0]
      }
      
      if (!this[key]) {
        this[key] = new this()
      }
      
      if (super.factory) {
        super.factory(...args)
      }
      
      return this[key]
    }
  }

# IndustryFactoryInstance [![Build Status](https://travis-ci.org/invrs/industry-factory-instance.svg?branch=master)](https://travis-ci.org/invrs/industry-factory-instance)

An Industry plugin that creates an instance of the factory class.

## Usage

```js
import { factory } from "industry"
import factory_instance from "../../"

describe("factory_instance", () => {
  let test, id

  function makeTest(id) {
    return factory()
      .set("factory_instance", factory_instance)
      .base(class {
        constructor() {
          this.id = id
          this.rand = Math.random()
        }
      })
  }
```

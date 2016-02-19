# IndustryFactoryInstance [![Build Status](https://travis-ci.org/invrs/industry-factory-instance.svg?branch=master)](https://travis-ci.org/invrs/industry-factory-instance)

An Industry plugin that creates an instance of the factory class.

## Usage

```js
import { factory } from "industry"
import { factory_instance } from "industry-factory-instance"

let test = factory()
  .set("factory_instance", factory_instance)
  .base(class {
    constructor() {
      this.rand = Math.random()
    }
  })

test().rand      == test().rand       // true
test("key").rand == test("key").rand  // true
test("key").rand == test().rand       // false
```

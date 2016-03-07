# IndustryInstance [![Build Status](https://travis-ci.org/invrs/industry-instance.svg?branch=master)](https://travis-ci.org/invrs/industry-instance)

An [Industry](https://github.com/invrs/industry) plugin that creates an instance of the factory class.

## Usage

```js
import { factory } from "industry"
import { instance } from "industry-instance"

let test = factory()
  .set("instance", instance)
  .base(class {
    constructor() {
      this.rand = Math.random()
    }
  })

test().rand      == test().rand       // true
test("key").rand == test("key").rand  // true
test("key").rand == test().rand       // false
```

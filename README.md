# IndustryInstance [![Build Status](https://travis-ci.org/invrs/industry-instance.svg?branch=master)](https://travis-ci.org/invrs/industry-instance)

Defines a factory function that builds instances.

## Usage

```js
import { factory } from "industry"
import { instance } from "industry-instance"

class Test {
  constructor() {
    this.rand = Math.random()
  }
}

let test = factory(Test)
  .set("instance", instance)

test().rand      == test().rand       // true
test("key").rand == test("key").rand  // true
test("key").rand == test().rand       // false
```

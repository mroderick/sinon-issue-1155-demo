# Sinon.JS issue 1155

This is a very minor repository to show that Sinon.JS stubs out methods on `global` just fine.

See https://github.com/sinonjs/sinon/issues/1155

#### Stubbing out all of `global`

```shell
node test-1.js
```

This is expected to fail, stubbing out the entire global scope is just silly as it will cause everything to fail


#### Stubbing out a method on `global`

```shell
node test-2.js
```

No failure
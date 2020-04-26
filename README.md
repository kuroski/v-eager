# v-eager

Since the default keyboard on Android, GBoard, does composing by default, this directive will always emit the `input` event even if you are just autocompleting.

This is just a workaround, more information about this problem:
- https://github.com/vuejs/vue/issues/9299
- https://github.com/vuejs/vue/issues/9777

So let's hope this PR (https://github.com/vuejs/vue/pull/9814) will be merged sometime =/

## Project setup
```
npm i -d @kuroski/v-eager
```

```
yarn add @kuroski/v-eager
```

### Global

```
import VEager from '@kuroski/v-eager'
Vue.use(VEager)
```

### Local

```
import {eager} from '@kuroski/v-eager'
export default {
  directives: {eager}
}
```

## Usage

Just add the directive `v-eager` in the desired input:

``` vue
<template>
<v-text-field
    id="name"
    name="name"
    v-model="name"
    v-eager
    label="Nome*"
    required
></v-text-field>
</template>
```
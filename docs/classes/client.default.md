[gencord](../README.md) / [Exports](../modules.md) / [client](../modules/client.md) / default

# Class: default

[client](../modules/client.md).default

## Hierarchy

- _EventEmitter_

  ↳ **default**

## Table of contents

### Constructors

- [constructor](client.default.md#constructor)

### Properties

- [options](client.default.md#options)
- [socket](client.default.md#socket)
- [token](client.default.md#token)
- [defaultMaxListeners](client.default.md#defaultmaxlisteners)
- [errorMonitor](client.default.md#errormonitor)

### Methods

- [addListener](client.default.md#addlistener)
- [destroy](client.default.md#destroy)
- [emit](client.default.md#emit)
- [eventNames](client.default.md#eventnames)
- [getMaxListeners](client.default.md#getmaxlisteners)
- [heartbeat](client.default.md#heartbeat)
- [identify](client.default.md#identify)
- [listenerCount](client.default.md#listenercount)
- [listeners](client.default.md#listeners)
- [login](client.default.md#login)
- [off](client.default.md#off)
- [on](client.default.md#on)
- [once](client.default.md#once)
- [prependListener](client.default.md#prependlistener)
- [prependOnceListener](client.default.md#prependoncelistener)
- [rawListeners](client.default.md#rawlisteners)
- [removeAllListeners](client.default.md#removealllisteners)
- [removeListener](client.default.md#removelistener)
- [setMaxListeners](client.default.md#setmaxlisteners)
- [listenerCount](client.default.md#listenercount)

## Constructors

### constructor

\+ **new default**(`options`: ClientOptions): [_default_](client.default.md)

#### Parameters:

| Name      | Type          |
| --------- | ------------- |
| `options` | ClientOptions |

**Returns:** [_default_](client.default.md)

Defined in: [src/client.ts:25](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L25)

## Properties

### options

• **options**: ClientOptions

**`param`** passed into the client

Defined in: [src/client.ts:19](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L19)

---

### socket

• `Private` **socket**: _WebSocket_

Defined in: [src/client.ts:13](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L13)

---

### token

• **token**: _string_

**`param`** bots token

Defined in: [src/client.ts:25](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L25)

---

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: _number_

Defined in: node_modules/@types/node/events.d.ts:45

---

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: _typeof_ [_errorMonitor_](client.default.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:55

## Methods

### addListener

▸ **addListener**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_default_](client.default.md)

#### Parameters:

| Name       | Type                           |
| ---------- | ------------------------------ |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_default_](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:62

---

### destroy

▸ **destroy**(`reason?`: _string_): _void_

#### Parameters:

| Name      | Type     |
| --------- | -------- |
| `reason?` | _string_ |

**Returns:** _void_

Defined in: [src/client.ts:71](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L71)

---

### emit

▸ **emit**(`event`: _string_ \| _symbol_, ...`args`: _any_[]): _boolean_

#### Parameters:

| Name      | Type                 |
| --------- | -------------------- |
| `event`   | _string_ \| _symbol_ |
| `...args` | _any_[]              |

**Returns:** _boolean_

Defined in: node_modules/@types/node/events.d.ts:72

---

### eventNames

▸ **eventNames**(): (_string_ \| _symbol_)[]

**Returns:** (_string_ \| _symbol_)[]

Defined in: node_modules/@types/node/events.d.ts:77

---

### getMaxListeners

▸ **getMaxListeners**(): _number_

**Returns:** _number_

Defined in: node_modules/@types/node/events.d.ts:69

---

### heartbeat

▸ **heartbeat**(`ms`: _number_): _void_

#### Parameters:

| Name | Type     |
| ---- | -------- |
| `ms` | _number_ |

**Returns:** _void_

Defined in: [src/client.ts:65](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L65)

---

### identify

▸ **identify**(): _void_

**Returns:** _void_

Defined in: [src/client.ts:77](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L77)

---

### listenerCount

▸ **listenerCount**(`event`: _string_ \| _symbol_): _number_

#### Parameters:

| Name    | Type                 |
| ------- | -------------------- |
| `event` | _string_ \| _symbol_ |

**Returns:** _number_

Defined in: node_modules/@types/node/events.d.ts:73

---

### listeners

▸ **listeners**(`event`: _string_ \| _symbol_): Function[]

#### Parameters:

| Name    | Type                 |
| ------- | -------------------- |
| `event` | _string_ \| _symbol_ |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:70

---

### login

▸ **login**(): _Promise_<_void_\>

**Returns:** _Promise_<_void_\>

Defined in: [src/client.ts:33](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L33)

---

### off

▸ **off**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_default_](client.default.md)

#### Parameters:

| Name       | Type                           |
| ---------- | ------------------------------ |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_default_](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:66

---

### on

▸ **on**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_default_](client.default.md)

#### Parameters:

| Name       | Type                           |
| ---------- | ------------------------------ |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_default_](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:63

---

### once

▸ **once**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_default_](client.default.md)

#### Parameters:

| Name       | Type                           |
| ---------- | ------------------------------ |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_default_](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:64

---

### prependListener

▸ **prependListener**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_default_](client.default.md)

#### Parameters:

| Name       | Type                           |
| ---------- | ------------------------------ |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_default_](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:75

---

### prependOnceListener

▸ **prependOnceListener**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_default_](client.default.md)

#### Parameters:

| Name       | Type                           |
| ---------- | ------------------------------ |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_default_](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:76

---

### rawListeners

▸ **rawListeners**(`event`: _string_ \| _symbol_): Function[]

#### Parameters:

| Name    | Type                 |
| ------- | -------------------- |
| `event` | _string_ \| _symbol_ |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:71

---

### removeAllListeners

▸ **removeAllListeners**(`event?`: _string_ \| _symbol_): [_default_](client.default.md)

#### Parameters:

| Name     | Type                 |
| -------- | -------------------- |
| `event?` | _string_ \| _symbol_ |

**Returns:** [_default_](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:67

---

### removeListener

▸ **removeListener**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_default_](client.default.md)

#### Parameters:

| Name       | Type                           |
| ---------- | ------------------------------ |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_default_](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:65

---

### setMaxListeners

▸ **setMaxListeners**(`n`: _number_): [_default_](client.default.md)

#### Parameters:

| Name | Type     |
| ---- | -------- |
| `n`  | _number_ |

**Returns:** [_default_](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:68

---

### listenerCount

▸ `Static`**listenerCount**(`emitter`: _EventEmitter_, `event`: _string_ \| _symbol_): _number_

**`deprecated`** since v4.0.0

#### Parameters:

| Name      | Type                 |
| --------- | -------------------- |
| `emitter` | _EventEmitter_       |
| `event`   | _string_ \| _symbol_ |

**Returns:** _number_

Defined in: node_modules/@types/node/events.d.ts:44

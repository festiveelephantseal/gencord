[gencord](../README.md) / [Exports](../modules.md) / [client](../modules/client.md) / Client

# Class: Client

[client](../modules/client.md).Client

## Hierarchy

- _EventEmitter_

  ↳ **Client**

## Table of contents

### Constructors

- [constructor](client.client-1.md#constructor)

### Properties

- [handler](client.client-1.md#handler)
- [manager](client.client-1.md#manager)
- [options](client.client-1.md#options)
- [socket](client.client-1.md#socket)
- [token](client.client-1.md#token)
- [captureRejectionSymbol](client.client-1.md#capturerejectionsymbol)
- [captureRejections](client.client-1.md#capturerejections)
- [defaultMaxListeners](client.client-1.md#defaultmaxlisteners)
- [errorMonitor](client.client-1.md#errormonitor)

### Methods

- [addListener](client.client-1.md#addlistener)
- [destroy](client.client-1.md#destroy)
- [emit](client.client-1.md#emit)
- [eventNames](client.client-1.md#eventnames)
- [getMaxListeners](client.client-1.md#getmaxlisteners)
- [heartbeat](client.client-1.md#heartbeat)
- [identify](client.client-1.md#identify)
- [listenerCount](client.client-1.md#listenercount)
- [listeners](client.client-1.md#listeners)
- [login](client.client-1.md#login)
- [off](client.client-1.md#off)
- [on](client.client-1.md#on)
- [once](client.client-1.md#once)
- [ping](client.client-1.md#ping)
- [prependListener](client.client-1.md#prependlistener)
- [prependOnceListener](client.client-1.md#prependoncelistener)
- [rawListeners](client.client-1.md#rawlisteners)
- [removeAllListeners](client.client-1.md#removealllisteners)
- [removeListener](client.client-1.md#removelistener)
- [setMaxListeners](client.client-1.md#setmaxlisteners)
- [listenerCount](client.client-1.md#listenercount)
- [on](client.client-1.md#on)
- [once](client.client-1.md#once)

## Constructors

### constructor

\+ **new Client**(`options`: [_ClientOptions_](../interfaces/client.clientoptions.md)): [_Client_](client.client-1.md)

#### Parameters:

| Name      | Type                                                     |
| :-------- | :------------------------------------------------------- |
| `options` | [_ClientOptions_](../interfaces/client.clientoptions.md) |

**Returns:** [_Client_](client.client-1.md)

Defined in: [src/client.ts:30](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L30)

## Properties

### handler

• **handler**: [_RestHandler_](apihandler.resthandler.md)

Defined in: [src/client.ts:28](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L28)

---

### manager

• **manager**: [_Manager_](manager.manager-1.md)

Defined in: [src/client.ts:30](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L30)

---

### options

• **options**: [_ClientOptions_](../interfaces/client.clientoptions.md)

**`param`** passed into the client

Defined in: [src/client.ts:20](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L20)

---

### socket

• `Private` **socket**: _WebSocket_

Defined in: [src/client.ts:14](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L14)

---

### token

• **token**: _string_

**`param`** bots token

Defined in: [src/client.ts:26](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L26)

---

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: _typeof_ [_captureRejectionSymbol_](client.client-1.md#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:43

---

### captureRejections

▪ `Static` **captureRejections**: _boolean_

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:49

---

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: _number_

Defined in: node_modules/@types/node/events.d.ts:50

---

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: _typeof_ [_errorMonitor_](client.client-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:42

## Methods

### addListener

▸ **addListener**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_Client_](client.client-1.md)

#### Parameters:

| Name       | Type                           |
| :--------- | :----------------------------- |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_Client_](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:62

---

### destroy

▸ **destroy**(`reason?`: _string_): _void_

#### Parameters:

| Name      | Type     |
| :-------- | :------- |
| `reason?` | _string_ |

**Returns:** _void_

Defined in: [src/client.ts:77](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L77)

---

### emit

▸ **emit**(`event`: _string_ \| _symbol_, ...`args`: _any_[]): _boolean_

#### Parameters:

| Name      | Type                 |
| :-------- | :------------------- |
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

▸ `Private`**heartbeat**(`ms`: _number_): _void_

#### Parameters:

| Name | Type     |
| :--- | :------- |
| `ms` | _number_ |

**Returns:** _void_

Defined in: [src/client.ts:71](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L71)

---

### identify

▸ `Private`**identify**(): _void_

**Returns:** _void_

Defined in: [src/client.ts:94](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L94)

---

### listenerCount

▸ **listenerCount**(`event`: _string_ \| _symbol_): _number_

#### Parameters:

| Name    | Type                 |
| :------ | :------------------- |
| `event` | _string_ \| _symbol_ |

**Returns:** _number_

Defined in: node_modules/@types/node/events.d.ts:73

---

### listeners

▸ **listeners**(`event`: _string_ \| _symbol_): Function[]

#### Parameters:

| Name    | Type                 |
| :------ | :------------------- |
| `event` | _string_ \| _symbol_ |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:70

---

### login

▸ `Private`**login**(): _Promise_<void\>

**Returns:** _Promise_<void\>

Defined in: [src/client.ts:39](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L39)

---

### off

▸ **off**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_Client_](client.client-1.md)

#### Parameters:

| Name       | Type                           |
| :--------- | :----------------------------- |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_Client_](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:66

---

### on

▸ **on**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_Client_](client.client-1.md)

#### Parameters:

| Name       | Type                           |
| :--------- | :----------------------------- |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_Client_](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:63

---

### once

▸ **once**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_Client_](client.client-1.md)

#### Parameters:

| Name       | Type                           |
| :--------- | :----------------------------- |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_Client_](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:64

---

### ping

▸ **ping**(): _Timeout_

**Returns:** _Timeout_

Defined in: [src/client.ts:83](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L83)

---

### prependListener

▸ **prependListener**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_Client_](client.client-1.md)

#### Parameters:

| Name       | Type                           |
| :--------- | :----------------------------- |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_Client_](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:75

---

### prependOnceListener

▸ **prependOnceListener**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_Client_](client.client-1.md)

#### Parameters:

| Name       | Type                           |
| :--------- | :----------------------------- |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_Client_](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:76

---

### rawListeners

▸ **rawListeners**(`event`: _string_ \| _symbol_): Function[]

#### Parameters:

| Name    | Type                 |
| :------ | :------------------- |
| `event` | _string_ \| _symbol_ |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:71

---

### removeAllListeners

▸ **removeAllListeners**(`event?`: _string_ \| _symbol_): [_Client_](client.client-1.md)

#### Parameters:

| Name     | Type                 |
| :------- | :------------------- |
| `event?` | _string_ \| _symbol_ |

**Returns:** [_Client_](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:67

---

### removeListener

▸ **removeListener**(`event`: _string_ \| _symbol_, `listener`: (...`args`: _any_[]) => _void_): [_Client_](client.client-1.md)

#### Parameters:

| Name       | Type                           |
| :--------- | :----------------------------- |
| `event`    | _string_ \| _symbol_           |
| `listener` | (...`args`: _any_[]) => _void_ |

**Returns:** [_Client_](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:65

---

### setMaxListeners

▸ **setMaxListeners**(`n`: _number_): [_Client_](client.client-1.md)

#### Parameters:

| Name | Type     |
| :--- | :------- |
| `n`  | _number_ |

**Returns:** [_Client_](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:68

---

### listenerCount

▸ `Static`**listenerCount**(`emitter`: _EventEmitter_, `event`: _string_ \| _symbol_): _number_

**`deprecated`** since v4.0.0

#### Parameters:

| Name      | Type                 |
| :-------- | :------------------- |
| `emitter` | _EventEmitter_       |
| `event`   | _string_ \| _symbol_ |

**Returns:** _number_

Defined in: node_modules/@types/node/events.d.ts:31

---

### on

▸ `Static`**on**(`emitter`: _EventEmitter_, `event`: _string_): _AsyncIterableIterator_<any\>

#### Parameters:

| Name      | Type           |
| :-------- | :------------- |
| `emitter` | _EventEmitter_ |
| `event`   | _string_       |

**Returns:** _AsyncIterableIterator_<any\>

Defined in: node_modules/@types/node/events.d.ts:28

---

### once

▸ `Static`**once**(`emitter`: _NodeEventTarget_, `event`: _string_ \| _symbol_): _Promise_<any[]\>

#### Parameters:

| Name      | Type                 |
| :-------- | :------------------- |
| `emitter` | _NodeEventTarget_    |
| `event`   | _string_ \| _symbol_ |

**Returns:** _Promise_<any[]\>

Defined in: node_modules/@types/node/events.d.ts:26

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: _string_): _Promise_<any[]\>

#### Parameters:

| Name      | Type           |
| :-------- | :------------- |
| `emitter` | DOMEventTarget |
| `event`   | _string_       |

**Returns:** _Promise_<any[]\>

Defined in: node_modules/@types/node/events.d.ts:27

[gencord](../README.md) / [Exports](../modules.md) / [client](../modules/client.md) / Client

# Class: Client

[client](../modules/client.md).Client

## Hierarchy

* *EventEmitter*

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

\+ **new Client**(`options`: [*ClientOptions*](../interfaces/client.clientoptions.md)): [*Client*](client.client-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*ClientOptions*](../interfaces/client.clientoptions.md) |

**Returns:** [*Client*](client.client-1.md)

Defined in: [src/client.ts:30](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L30)

## Properties

### handler

• **handler**: [*RestHandler*](apihandler.resthandler.md)

Defined in: [src/client.ts:28](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L28)

___

### manager

• **manager**: [*Manager*](manager.manager-1.md)

Defined in: [src/client.ts:30](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L30)

___

### options

• **options**: [*ClientOptions*](../interfaces/client.clientoptions.md)

**`param`** passed into the client

Defined in: [src/client.ts:20](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L20)

___

### socket

• `Private` **socket**: *WebSocket*

Defined in: [src/client.ts:14](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L14)

___

### token

• **token**: *string*

**`param`** bots token

Defined in: [src/client.ts:26](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L26)

___

### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](client.client-1.md#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:43

___

### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:49

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:50

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](client.client-1.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:42

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Client*](client.client-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Client*](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### destroy

▸ **destroy**(`reason?`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`reason?` | *string* |

**Returns:** *void*

Defined in: [src/client.ts:77](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L77)

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:72

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:77

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:69

___

### heartbeat

▸ `Private`**heartbeat**(`ms`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`ms` | *number* |

**Returns:** *void*

Defined in: [src/client.ts:71](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L71)

___

### identify

▸ `Private`**identify**(): *void*

**Returns:** *void*

Defined in: [src/client.ts:94](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L94)

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:70

___

### login

▸ `Private`**login**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/client.ts:39](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L39)

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Client*](client.client-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Client*](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Client*](client.client-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Client*](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Client*](client.client-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Client*](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### ping

▸ **ping**(): *Timeout*

**Returns:** *Timeout*

Defined in: [src/client.ts:83](https://github.com/Gencord/gencord/blob/a52c25b/src/client.ts#L83)

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Client*](client.client-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Client*](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Client*](client.client-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Client*](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Client*](client.client-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Client*](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Client*](client.client-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Client*](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Client*](client.client-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Client*](client.client-1.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:31

___

### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<any\>

Defined in: node_modules/@types/node/events.d.ts:28

___

### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* \| *symbol*): *Promise*<any[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | *NodeEventTarget* |
`event` | *string* \| *symbol* |

**Returns:** *Promise*<any[]\>

Defined in: node_modules/@types/node/events.d.ts:26

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<any[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<any[]\>

Defined in: node_modules/@types/node/events.d.ts:27

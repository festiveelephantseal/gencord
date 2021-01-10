[gencord](../README.md) / [Exports](../modules.md) / [client](../modules/client.md) / default

# Class: default

[client](../modules/client.md).default

## Hierarchy

* *EventEmitter*

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

\+ **new default**(`options`: ClientOptions): [*default*](client.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`options` | ClientOptions |

**Returns:** [*default*](client.default.md)

Defined in: [src/client.ts:25](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L25)

## Properties

### options

• **options**: ClientOptions

**`param`** passed into the client

Defined in: [src/client.ts:19](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L19)

___

### socket

• `Private` **socket**: *WebSocket*

Defined in: [src/client.ts:13](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L13)

___

### token

• **token**: *string*

**`param`** bots token

Defined in: [src/client.ts:25](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L25)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:45

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](client.default.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:55

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### destroy

▸ **destroy**(`reason?`: *string*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`reason?` | *string* |

**Returns:** *void*

Defined in: [src/client.ts:71](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L71)

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
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

▸ **heartbeat**(`ms`: *number*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`ms` | *number* |

**Returns:** *void*

Defined in: [src/client.ts:65](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L65)

___

### identify

▸ **identify**(): *void*

**Returns:** *void*

Defined in: [src/client.ts:77](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L77)

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:70

___

### login

▸ **login**(): *Promise*<*void*\>

**Returns:** *Promise*<*void*\>

Defined in: [src/client.ts:33](https://github.com/nerdthatnoonelikes/gencord/blob/ea45359/src/client.ts#L33)

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*default*](client.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* \| *symbol* |

**Returns:** [*default*](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*default*](client.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*default*](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*default*](client.default.md)

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*default*](client.default.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:44

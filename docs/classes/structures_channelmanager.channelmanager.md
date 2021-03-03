[gencord](../README.md) / [Exports](../modules.md) / [structures/ChannelManager](../modules/structures_channelmanager.md) / ChannelManager

# Class: ChannelManager

[structures/ChannelManager](../modules/structures_channelmanager.md).ChannelManager

## Table of contents

### Constructors

- [constructor](structures_channelmanager.channelmanager.md#constructor)

### Properties

- [bitrate](structures_channelmanager.channelmanager.md#bitrate)
- [client](structures_channelmanager.channelmanager.md#client)
- [id](structures_channelmanager.channelmanager.md#id)
- [name](structures_channelmanager.channelmanager.md#name)
- [nsfw](structures_channelmanager.channelmanager.md#nsfw)
- [position](structures_channelmanager.channelmanager.md#position)
- [rate_limit_per_user](structures_channelmanager.channelmanager.md#rate_limit_per_user)
- [topic](structures_channelmanager.channelmanager.md#topic)
- [type](structures_channelmanager.channelmanager.md#type)
- [user_limit](structures_channelmanager.channelmanager.md#user_limit)

### Methods

- [delete](structures_channelmanager.channelmanager.md#delete)
- [get](structures_channelmanager.channelmanager.md#get)
- [send](structures_channelmanager.channelmanager.md#send)
- [update](structures_channelmanager.channelmanager.md#update)

## Constructors

### constructor

\+ **new ChannelManager**(`client`: [_Client_](client.client-1.md)): [_ChannelManager_](structures_channelmanager.channelmanager.md)

#### Parameters:

| Name     | Type                           |
| :------- | :----------------------------- |
| `client` | [_Client_](client.client-1.md) |

**Returns:** [_ChannelManager_](structures_channelmanager.channelmanager.md)

Defined in: [src/structures/ChannelManager.ts:13](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L13)

## Properties

### bitrate

• **bitrate**: _number_

Defined in: [src/structures/ChannelManager.ts:12](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L12)

---

### client

• `Private` **client**: [_Client_](client.client-1.md)

Defined in: [src/structures/ChannelManager.ts:4](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L4)

---

### id

• **id**: _string_

Defined in: [src/structures/ChannelManager.ts:5](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L5)

---

### name

• **name**: _string_

Defined in: [src/structures/ChannelManager.ts:6](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L6)

---

### nsfw

• **nsfw**: _boolean_

Defined in: [src/structures/ChannelManager.ts:10](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L10)

---

### position

• **position**: _number_

Defined in: [src/structures/ChannelManager.ts:8](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L8)

---

### rate_limit_per_user

• **rate_limit_per_user**: _number_

Defined in: [src/structures/ChannelManager.ts:11](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L11)

---

### topic

• **topic**: _string_

Defined in: [src/structures/ChannelManager.ts:9](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L9)

---

### type

• **type**: _number_

Defined in: [src/structures/ChannelManager.ts:7](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L7)

---

### user_limit

• **user_limit**: _number_

Defined in: [src/structures/ChannelManager.ts:13](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L13)

## Methods

### delete

▸ **delete**(`channelID`: _string_): _Promise_<void\>

#### Parameters:

| Name        | Type     |
| :---------- | :------- |
| `channelID` | _string_ |

**Returns:** _Promise_<void\>

Defined in: [src/structures/ChannelManager.ts:33](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L33)

---

### get

▸ **get**(): _Promise_<void\>

**Returns:** _Promise_<void\>

Defined in: [src/structures/ChannelManager.ts:19](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L19)

---

### send

▸ **send**(`channelID`: _string_, `content`: _any_): _Promise_<void\>

#### Parameters:

| Name        | Type     |
| :---------- | :------- |
| `channelID` | _string_ |
| `content`   | _any_    |

**Returns:** _Promise_<void\>

Defined in: [src/structures/ChannelManager.ts:40](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L40)

---

### update

▸ **update**(): _Promise_<void\>

**Returns:** _Promise_<void\>

Defined in: [src/structures/ChannelManager.ts:26](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L26)

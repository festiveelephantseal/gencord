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
- [rate\_limit\_per\_user](structures_channelmanager.channelmanager.md#rate_limit_per_user)
- [topic](structures_channelmanager.channelmanager.md#topic)
- [type](structures_channelmanager.channelmanager.md#type)
- [user\_limit](structures_channelmanager.channelmanager.md#user_limit)

### Methods

- [delete](structures_channelmanager.channelmanager.md#delete)
- [get](structures_channelmanager.channelmanager.md#get)
- [send](structures_channelmanager.channelmanager.md#send)
- [update](structures_channelmanager.channelmanager.md#update)

## Constructors

### constructor

\+ **new ChannelManager**(`client`: [*Client*](client.client-1.md)): [*ChannelManager*](structures_channelmanager.channelmanager.md)

#### Parameters:

Name | Type |
:------ | :------ |
`client` | [*Client*](client.client-1.md) |

**Returns:** [*ChannelManager*](structures_channelmanager.channelmanager.md)

Defined in: [src/structures/ChannelManager.ts:13](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L13)

## Properties

### bitrate

• **bitrate**: *number*

Defined in: [src/structures/ChannelManager.ts:12](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L12)

___

### client

• `Private` **client**: [*Client*](client.client-1.md)

Defined in: [src/structures/ChannelManager.ts:4](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L4)

___

### id

• **id**: *string*

Defined in: [src/structures/ChannelManager.ts:5](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L5)

___

### name

• **name**: *string*

Defined in: [src/structures/ChannelManager.ts:6](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L6)

___

### nsfw

• **nsfw**: *boolean*

Defined in: [src/structures/ChannelManager.ts:10](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L10)

___

### position

• **position**: *number*

Defined in: [src/structures/ChannelManager.ts:8](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L8)

___

### rate\_limit\_per\_user

• **rate\_limit\_per\_user**: *number*

Defined in: [src/structures/ChannelManager.ts:11](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L11)

___

### topic

• **topic**: *string*

Defined in: [src/structures/ChannelManager.ts:9](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L9)

___

### type

• **type**: *number*

Defined in: [src/structures/ChannelManager.ts:7](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L7)

___

### user\_limit

• **user\_limit**: *number*

Defined in: [src/structures/ChannelManager.ts:13](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L13)

## Methods

### delete

▸ **delete**(`channelID`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`channelID` | *string* |

**Returns:** *Promise*<void\>

Defined in: [src/structures/ChannelManager.ts:33](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L33)

___

### get

▸ **get**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/structures/ChannelManager.ts:19](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L19)

___

### send

▸ **send**(`channelID`: *string*, `content`: *any*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`channelID` | *string* |
`content` | *any* |

**Returns:** *Promise*<void\>

Defined in: [src/structures/ChannelManager.ts:40](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L40)

___

### update

▸ **update**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/structures/ChannelManager.ts:26](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/ChannelManager.ts#L26)

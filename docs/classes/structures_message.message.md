[gencord](../README.md) / [Exports](../modules.md) / [structures/Message](../modules/structures_message.md) / Message

# Class: Message

[structures/Message](../modules/structures_message.md).Message

## Table of contents

### Constructors

- [constructor](structures_message.message.md#constructor)

### Properties

- [author](structures_message.message.md#author)
- [channel](structures_message.message.md#channel)
- [channel\_id](structures_message.message.md#channel_id)
- [client](structures_message.message.md#client)
- [content](structures_message.message.md#content)
- [edited\_timestamp](structures_message.message.md#edited_timestamp)
- [guild](structures_message.message.md#guild)
- [guild\_id](structures_message.message.md#guild_id)
- [id](structures_message.message.md#id)
- [member](structures_message.message.md#member)
- [mention\_everyone](structures_message.message.md#mention_everyone)
- [mention\_roles](structures_message.message.md#mention_roles)
- [mentions](structures_message.message.md#mentions)
- [timestamp](structures_message.message.md#timestamp)
- [tts](structures_message.message.md#tts)

### Methods

- [\_set](structures_message.message.md#_set)
- [delete](structures_message.message.md#delete)
- [reply](structures_message.message.md#reply)

## Constructors

### constructor

\+ **new Message**(`data`: *any*, `client`: *any*): [*Message*](structures_message.message.md)

#### Parameters:

Name | Type |
:------ | :------ |
`data` | *any* |
`client` | *any* |

**Returns:** [*Message*](structures_message.message.md)

Defined in: [src/structures/Message.ts:21](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L21)

## Properties

### author

• **author**: *any*

Defined in: [src/structures/Message.ts:13](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L13)

___

### channel

• **channel**: [*ChannelManager*](structures_channelmanager.channelmanager.md)

Defined in: [src/structures/Message.ts:12](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L12)

___

### channel\_id

• **channel\_id**: *string*

Defined in: [src/structures/Message.ts:9](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L9)

___

### client

• `Private` **client**: [*Client*](client.client-1.md)

Defined in: [src/structures/Message.ts:7](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L7)

___

### content

• **content**: *string*

Defined in: [src/structures/Message.ts:15](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L15)

___

### edited\_timestamp

• `Optional` **edited\_timestamp**: *number*

Defined in: [src/structures/Message.ts:17](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L17)

___

### guild

• **guild**: [*GuildManager*](structures_guildmanager.guildmanager.md)

Defined in: [src/structures/Message.ts:11](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L11)

___

### guild\_id

• `Optional` **guild\_id**: *string*

Defined in: [src/structures/Message.ts:10](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L10)

___

### id

• **id**: *string*

Defined in: [src/structures/Message.ts:8](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L8)

___

### member

• `Optional` **member**: *any*

Defined in: [src/structures/Message.ts:14](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L14)

___

### mention\_everyone

• **mention\_everyone**: *boolean*

Defined in: [src/structures/Message.ts:19](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L19)

___

### mention\_roles

• **mention\_roles**: *string*[]

Defined in: [src/structures/Message.ts:21](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L21)

___

### mentions

• **mentions**: [*User*](structures_user.user.md)[]

Defined in: [src/structures/Message.ts:20](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L20)

___

### timestamp

• **timestamp**: *number*

Defined in: [src/structures/Message.ts:16](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L16)

___

### tts

• **tts**: *boolean*

Defined in: [src/structures/Message.ts:18](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L18)

## Methods

### \_set

▸ **_set**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/structures/Message.ts:38](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L38)

___

### delete

▸ **delete**(`channelID`: *string*, `messageID`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`channelID` | *string* |
`messageID` | *string* |

**Returns:** *Promise*<void\>

Defined in: [src/structures/Message.ts:58](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L58)

___

### reply

▸ **reply**(`channelID`: *string*, `content`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`channelID` | *string* |
`content` | *string* |

**Returns:** *Promise*<void\>

Defined in: [src/structures/Message.ts:47](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L47)

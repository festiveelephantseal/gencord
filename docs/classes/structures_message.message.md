[gencord](../README.md) / [Exports](../modules.md) / [structures/Message](../modules/structures_message.md) / Message

# Class: Message

[structures/Message](../modules/structures_message.md).Message

## Table of contents

### Constructors

- [constructor](structures_message.message.md#constructor)

### Properties

- [author](structures_message.message.md#author)
- [channel](structures_message.message.md#channel)
- [channel_id](structures_message.message.md#channel_id)
- [client](structures_message.message.md#client)
- [content](structures_message.message.md#content)
- [edited_timestamp](structures_message.message.md#edited_timestamp)
- [guild](structures_message.message.md#guild)
- [guild_id](structures_message.message.md#guild_id)
- [id](structures_message.message.md#id)
- [member](structures_message.message.md#member)
- [mention_everyone](structures_message.message.md#mention_everyone)
- [mention_roles](structures_message.message.md#mention_roles)
- [mentions](structures_message.message.md#mentions)
- [timestamp](structures_message.message.md#timestamp)
- [tts](structures_message.message.md#tts)

### Methods

- [\_set](structures_message.message.md#_set)
- [delete](structures_message.message.md#delete)
- [reply](structures_message.message.md#reply)

## Constructors

### constructor

\+ **new Message**(`data`: _any_, `client`: _any_): [_Message_](structures_message.message.md)

#### Parameters:

| Name     | Type  |
| :------- | :---- |
| `data`   | _any_ |
| `client` | _any_ |

**Returns:** [_Message_](structures_message.message.md)

Defined in: [src/structures/Message.ts:21](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L21)

## Properties

### author

• **author**: _any_

Defined in: [src/structures/Message.ts:13](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L13)

---

### channel

• **channel**: [_ChannelManager_](structures_channelmanager.channelmanager.md)

Defined in: [src/structures/Message.ts:12](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L12)

---

### channel_id

• **channel_id**: _string_

Defined in: [src/structures/Message.ts:9](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L9)

---

### client

• `Private` **client**: [_Client_](client.client-1.md)

Defined in: [src/structures/Message.ts:7](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L7)

---

### content

• **content**: _string_

Defined in: [src/structures/Message.ts:15](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L15)

---

### edited_timestamp

• `Optional` **edited_timestamp**: _number_

Defined in: [src/structures/Message.ts:17](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L17)

---

### guild

• **guild**: [_GuildManager_](structures_guildmanager.guildmanager.md)

Defined in: [src/structures/Message.ts:11](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L11)

---

### guild_id

• `Optional` **guild_id**: _string_

Defined in: [src/structures/Message.ts:10](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L10)

---

### id

• **id**: _string_

Defined in: [src/structures/Message.ts:8](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L8)

---

### member

• `Optional` **member**: _any_

Defined in: [src/structures/Message.ts:14](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L14)

---

### mention_everyone

• **mention_everyone**: _boolean_

Defined in: [src/structures/Message.ts:19](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L19)

---

### mention_roles

• **mention_roles**: _string_[]

Defined in: [src/structures/Message.ts:21](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L21)

---

### mentions

• **mentions**: [_User_](structures_user.user.md)[]

Defined in: [src/structures/Message.ts:20](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L20)

---

### timestamp

• **timestamp**: _number_

Defined in: [src/structures/Message.ts:16](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L16)

---

### tts

• **tts**: _boolean_

Defined in: [src/structures/Message.ts:18](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L18)

## Methods

### \_set

▸ **\_set**(): _Promise_<void\>

**Returns:** _Promise_<void\>

Defined in: [src/structures/Message.ts:38](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L38)

---

### delete

▸ **delete**(`channelID`: _string_, `messageID`: _string_): _Promise_<void\>

#### Parameters:

| Name        | Type     |
| :---------- | :------- |
| `channelID` | _string_ |
| `messageID` | _string_ |

**Returns:** _Promise_<void\>

Defined in: [src/structures/Message.ts:58](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L58)

---

### reply

▸ **reply**(`channelID`: _string_, `content`: _string_): _Promise_<void\>

#### Parameters:

| Name        | Type     |
| :---------- | :------- |
| `channelID` | _string_ |
| `content`   | _string_ |

**Returns:** _Promise_<void\>

Defined in: [src/structures/Message.ts:47](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/Message.ts#L47)

[gencord](../README.md) / [Exports](../modules.md) / [structures/MessageEmbed](../modules/structures_messageembed.md) / MessageEmbed

# Class: MessageEmbed

[structures/MessageEmbed](../modules/structures_messageembed.md).MessageEmbed

## Table of contents

### Constructors

- [constructor](structures_messageembed.messageembed.md#constructor)

### Properties

- [client](structures_messageembed.messageembed.md#client)

### Methods

- [send](structures_messageembed.messageembed.md#send)

## Constructors

### constructor

\+ **new MessageEmbed**(`client`: [_Client_](client.client-1.md)): [_MessageEmbed_](structures_messageembed.messageembed.md)

#### Parameters:

| Name     | Type                           |
| :------- | :----------------------------- |
| `client` | [_Client_](client.client-1.md) |

**Returns:** [_MessageEmbed_](structures_messageembed.messageembed.md)

Defined in: [src/structures/MessageEmbed.ts:27](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/MessageEmbed.ts#L27)

## Properties

### client

• `Private` **client**: [_Client_](client.client-1.md)

Defined in: [src/structures/MessageEmbed.ts:27](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/MessageEmbed.ts#L27)

## Methods

### send

▸ **send**(`channelID`: _string_, `embed`: [_MessageEmbedOptions_](../interfaces/structures_messageembed.messageembedoptions.md)): _Promise_<void\>

#### Parameters:

| Name        | Type                                                                                  |
| :---------- | :------------------------------------------------------------------------------------ |
| `channelID` | _string_                                                                              |
| `embed`     | [_MessageEmbedOptions_](../interfaces/structures_messageembed.messageembedoptions.md) |

**Returns:** _Promise_<void\>

Defined in: [src/structures/MessageEmbed.ts:33](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/MessageEmbed.ts#L33)

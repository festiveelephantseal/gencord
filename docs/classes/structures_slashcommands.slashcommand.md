[gencord](../README.md) / [Exports](../modules.md) / [structures/SlashCommands](../modules/structures_slashcommands.md) / SlashCommand

# Class: SlashCommand

[structures/SlashCommands](../modules/structures_slashcommands.md).SlashCommand

## Table of contents

### Constructors

- [constructor](structures_slashcommands.slashcommand.md#constructor)

### Properties

- [client](structures_slashcommands.slashcommand.md#client)

### Methods

- [delete](structures_slashcommands.slashcommand.md#delete)
- [edit](structures_slashcommands.slashcommand.md#edit)
- [get](structures_slashcommands.slashcommand.md#get)
- [register](structures_slashcommands.slashcommand.md#register)

## Constructors

### constructor

\+ **new SlashCommand**(`client`: [_Client_](client.client-1.md)): [_SlashCommand_](structures_slashcommands.slashcommand.md)

#### Parameters:

| Name     | Type                           |
| :------- | :----------------------------- |
| `client` | [_Client_](client.client-1.md) |

**Returns:** [_SlashCommand_](structures_slashcommands.slashcommand.md)

Defined in: [src/structures/SlashCommands.ts:23](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L23)

## Properties

### client

• `Private` **client**: [_Client_](client.client-1.md)

Defined in: [src/structures/SlashCommands.ts:23](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L23)

## Methods

### delete

▸ **delete**(`options?`: [_ApplicationCommandOption_](../interfaces/structures_slashcommands.applicationcommandoption.md)): _Promise_<void\>

#### Parameters:

| Name       | Type                                                                                             |
| :--------- | :----------------------------------------------------------------------------------------------- |
| `options?` | [_ApplicationCommandOption_](../interfaces/structures_slashcommands.applicationcommandoption.md) |

**Returns:** _Promise_<void\>

Defined in: [src/structures/SlashCommands.ts:53](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L53)

---

### edit

▸ **edit**(`options?`: [_ApplicationCommandOption_](../interfaces/structures_slashcommands.applicationcommandoption.md)): _Promise_<void\>

#### Parameters:

| Name       | Type                                                                                             |
| :--------- | :----------------------------------------------------------------------------------------------- |
| `options?` | [_ApplicationCommandOption_](../interfaces/structures_slashcommands.applicationcommandoption.md) |

**Returns:** _Promise_<void\>

Defined in: [src/structures/SlashCommands.ts:52](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L52)

---

### get

▸ **get**(`applicationID`: _string_): _Promise_<void\>

#### Parameters:

| Name            | Type     |
| :-------------- | :------- |
| `applicationID` | _string_ |

**Returns:** _Promise_<void\>

Defined in: [src/structures/SlashCommands.ts:29](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L29)

---

### register

▸ **register**(`applicationID`: _any_, `options`: [_ApplicationCommandOption_](../interfaces/structures_slashcommands.applicationcommandoption.md)): _Promise_<void\>

#### Parameters:

| Name            | Type                                                                                             |
| :-------------- | :----------------------------------------------------------------------------------------------- |
| `applicationID` | _any_                                                                                            |
| `options`       | [_ApplicationCommandOption_](../interfaces/structures_slashcommands.applicationcommandoption.md) |

**Returns:** _Promise_<void\>

Defined in: [src/structures/SlashCommands.ts:36](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L36)

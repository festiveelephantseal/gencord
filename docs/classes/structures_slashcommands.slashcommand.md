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

\+ **new SlashCommand**(`client`: [*Client*](client.client-1.md)): [*SlashCommand*](structures_slashcommands.slashcommand.md)

#### Parameters:

Name | Type |
:------ | :------ |
`client` | [*Client*](client.client-1.md) |

**Returns:** [*SlashCommand*](structures_slashcommands.slashcommand.md)

Defined in: [src/structures/SlashCommands.ts:23](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L23)

## Properties

### client

• `Private` **client**: [*Client*](client.client-1.md)

Defined in: [src/structures/SlashCommands.ts:23](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L23)

## Methods

### delete

▸ **delete**(`options?`: [*ApplicationCommandOption*](../interfaces/structures_slashcommands.applicationcommandoption.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | [*ApplicationCommandOption*](../interfaces/structures_slashcommands.applicationcommandoption.md) |

**Returns:** *Promise*<void\>

Defined in: [src/structures/SlashCommands.ts:53](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L53)

___

### edit

▸ **edit**(`options?`: [*ApplicationCommandOption*](../interfaces/structures_slashcommands.applicationcommandoption.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | [*ApplicationCommandOption*](../interfaces/structures_slashcommands.applicationcommandoption.md) |

**Returns:** *Promise*<void\>

Defined in: [src/structures/SlashCommands.ts:52](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L52)

___

### get

▸ **get**(`applicationID`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`applicationID` | *string* |

**Returns:** *Promise*<void\>

Defined in: [src/structures/SlashCommands.ts:29](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L29)

___

### register

▸ **register**(`applicationID`: *any*, `options`: [*ApplicationCommandOption*](../interfaces/structures_slashcommands.applicationcommandoption.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`applicationID` | *any* |
`options` | [*ApplicationCommandOption*](../interfaces/structures_slashcommands.applicationcommandoption.md) |

**Returns:** *Promise*<void\>

Defined in: [src/structures/SlashCommands.ts:36](https://github.com/Gencord/gencord/blob/a52c25b/src/structures/SlashCommands.ts#L36)

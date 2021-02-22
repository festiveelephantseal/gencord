[gencord](../README.md) / [Exports](../modules.md) / [Manager](../modules/manager.md) / Manager

# Class: Manager

[Manager](../modules/manager.md).Manager

## Table of contents

### Constructors

- [constructor](manager.manager-1.md#constructor)

### Methods

- [getMember](manager.manager-1.md#getmember)
- [getUser](manager.manager-1.md#getuser)

## Constructors

### constructor

\+ **new Manager**(`client`: [*Client*](client.client-1.md)): [*Manager*](manager.manager-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`client` | [*Client*](client.client-1.md) |

**Returns:** [*Manager*](manager.manager-1.md)

Defined in: [src/Manager.ts:3](https://github.com/Gencord/gencord/blob/a52c25b/src/Manager.ts#L3)

## Methods

### getMember

▸ **getMember**(`guildID`: *string*, `userID`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`guildID` | *string* |
`userID` | *string* |

**Returns:** *Promise*<void\>

Defined in: [src/Manager.ts:13](https://github.com/Gencord/gencord/blob/a52c25b/src/Manager.ts#L13)

___

### getUser

▸ **getUser**(`userID`: *string*): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`userID` | *string* |

**Returns:** *Promise*<void\>

Defined in: [src/Manager.ts:6](https://github.com/Gencord/gencord/blob/a52c25b/src/Manager.ts#L6)

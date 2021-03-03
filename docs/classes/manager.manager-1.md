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

\+ **new Manager**(`client`: [_Client_](client.client-1.md)): [_Manager_](manager.manager-1.md)

#### Parameters:

| Name     | Type                           |
| :------- | :----------------------------- |
| `client` | [_Client_](client.client-1.md) |

**Returns:** [_Manager_](manager.manager-1.md)

Defined in: [src/Manager.ts:3](https://github.com/Gencord/gencord/blob/a52c25b/src/Manager.ts#L3)

## Methods

### getMember

▸ **getMember**(`guildID`: _string_, `userID`: _string_): _Promise_<void\>

#### Parameters:

| Name      | Type     |
| :-------- | :------- |
| `guildID` | _string_ |
| `userID`  | _string_ |

**Returns:** _Promise_<void\>

Defined in: [src/Manager.ts:13](https://github.com/Gencord/gencord/blob/a52c25b/src/Manager.ts#L13)

---

### getUser

▸ **getUser**(`userID`: _string_): _Promise_<void\>

#### Parameters:

| Name     | Type     |
| :------- | :------- |
| `userID` | _string_ |

**Returns:** _Promise_<void\>

Defined in: [src/Manager.ts:6](https://github.com/Gencord/gencord/blob/a52c25b/src/Manager.ts#L6)

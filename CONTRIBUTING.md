# 🌌 Contributing

Welcome to the contributing page for Gencord. If you want to contribute, please check out the guidelines down below. If you have already forked and cloned, skip to the Development section.

## 🚀 Development

For development, please use yarn. We will not be using npm as our package manager. To check if you have yarn installed:

```js
yarn version
```

If you have it installed, great. Now, lets talk about coding. Gencord is written and maintained by Typescript. Please make sure you have typescript installed:

```js
yarn add typescript
```

Before you make any changes, please make sure that you are up to date with the latest version of the repo. Switch the base, make a pull request, submit it, then merge the PR to your codebase. To get the latest changes from the repo after updating run:

```js
git pull
```

After making changes, please run: 

```js
yarn run lint
```

To format the code. This is MANDATORY, so we do not have any formatting issues, and that code looks concise and clean.

Any changes that you want to make are all welcomed and will be reviewed. However, it is MANDATORY that you use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary). All commit messages be written within conventional commit standards:

```
// Example:
🌌 (fix): Fixed issues with typings in Client.ts
🚀 (feat): New structure added: VoiceChannel.ts
🎉 (docs): Updated CONTRIBUTING.md.
//and any conventional commit you want. Emojis are optional, but they must follow this standard.
```

After you have committed the changes, make a pull request, and please provide a detailed description of what changes you made. This way, things will run a lot more smoother.

### 🔰 Naming methods and properties

When it comes to naming methods and properties, here at Gencord, we have created a "system" to help name methods and properties. Note that for properties, we follow the **camel case** method. Check it out:

| Before            | After           |
| ----------------- | --------------- |
| fetchAllMembers() | members.fetch() |
| slash-commands    | slashCommands   |

If a mistake was made, we will review it and submit comments. Then, you can recommit and we will review until it looks good!

## 🔗 Links

- [Gist on conventional commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
- [Conventional commits official](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary)

Thank you for all the contributions. If you have any questions, feel free to join the [Discord Server.](https://discord.gg/GGQyhXRNZ2)

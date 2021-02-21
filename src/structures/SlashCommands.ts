interface GetCommandOptions {
  commandID: string;
  guildID: string;
}

export interface SlashCommandOptions {
  getCommands: GetCommandOptions;
}

export class SlashCommand {
  public async getCommands(options?: SlashCommandOptions): Promise<void> {}
  public async registerCommand(options?: SlashCommandOptions): Promise<void> {}
  public async editCommand(options?: SlashCommandOptions): Promise<void> {}
  public async deleteCommand(options?: SlashCommandOptions): Promise<void> {}
}

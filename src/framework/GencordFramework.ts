import { Client, ClientOptions } from "../";
import { exec } from 'child_process';
import fs from 'fs';
import { join } from 'path';
import pkgDir from 'pkg-dir';

export interface Directories {
  commands: string;
  events: string;
}

export interface Options extends ClientOptions {
  directories: Directories;
}
export class Framework extends Client {
  public directories: Directories;
  public options: Options;

  public constructor(options: Options) {
    super({
      token: options.token,
      intents: options.intents || 513,
    });
    this.options = options;
    this.directories = options.directories;
    this.start();
  }
  private async start() {
    await this.hotModule();
  };
  private async hotModule() {
    const dir = await pkgDir(process.cwd())
    const packageJson = await import(join(dir, 'package.json'));
    const command = fs.existsSync(join(dir, 'yarn.lock')) ? 'yarn add' : fs.existsSync(join(dir, 'package-lock.json')) ? 'npm install' : fs.existsSync(join(dir, 'pnpm-lock.yaml')) ? 'pnpm add' : 'ERR';
    const typescript = fs.existsSync(join(dir, 'tsconfig.json'));
    if(!packageJson["dependencies"]["glob"]) {
        if(command == 'ERR') return console.log('Could not determine which package manager to use to install "glob".');
        console.log('Can not find "glob" in local package.json dependencies. Installing..');
        exec(`${command} glob`, () => {
            console.log('Package "glob" installed.');
        })
    }
    if(typescript == true) {
        if(!packageJson["dependencies"]["@types/glob"] && !packageJson["dependencies"]["@types/glob"]) {
            console.log("This project is using typescript yet no typings for module \"glob\" can be found. Installing as a dev dependency.");
            exec(`${command} @types/glob -D`, () => {
                console.log('Package "@types/glob" installed as a dev dependency.')
            })
        }
    }

  }
}

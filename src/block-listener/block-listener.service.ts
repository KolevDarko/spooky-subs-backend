import { Injectable } from '@nestjs/common';
import type { OnApplicationBootstrap } from '@nestjs/common';
import { ethers } from 'ethers';
import { contractInfo } from './contractInfo';

@Injectable()
export class BlockListenerService implements OnApplicationBootstrap {
  async onApplicationBootstrap() {
    await this.init();
  }

  async init() {
    const SubMgrContract = new ethers.Contract(
      '0x2744041d1cdf24c6c01290d03e17d9467207f72f',
      contractInfo.abi,
    );
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const filter = {
      address: '0x2744041d1cDf24C6c01290d03E17D9467207f72F',
    };
    provider.on(filter, (log) => {
      const parsedLog = SubMgrContract.interface.parseLog(log);
      console.log('Detected an event on our contract yaaaay super');
      console.log(parsedLog);
    });
  }
}

/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';

const CLOUDFLARE_ENDPOINT = 'https://matic-mumbai.chainstacklabs.com';
const MAIN_ENDPOINT = 'https://matic-mumbai.chainstacklabs.com';
const ALTERNATE_ENDPOINT = 'https://matic-mumbai.chainstacklabs.com';
const UNSECURE_ENDPOINT = 'https://matic-mumbai.chainstacklabs.com';
const QUICKNODE_ENDPOINT = process.env.REACT_APP_QUICKNODE_URL;

export function createProvider() {  
  return new ethers.providers.JsonRpcProvider(QUICKNODE_ENDPOINT || MAIN_ENDPOINT, 80001);
}
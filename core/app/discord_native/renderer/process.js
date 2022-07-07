"use strict";

const electron = require('electron');

const process = require('process');

const env = process.env;
module.exports = {
  platform: process.platform,
  arch: process.arch,
  env: {
    DISCORD_TEST: env['DISCORD_TEST'],
    LOCALAPPDATA: env['LOCALAPPDATA'],
    'PROGRAMFILES(X86)': env['PROGRAMFILES(X86)'],
    PROGRAMFILES: env['PROGRAMFILES'],
    PROGRAMW6432: env['PROGRAMW6432'],
    PROGRAMDATA: env['PROGRAMDATA']
  }
};
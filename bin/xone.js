#! /usr/bin/env node   // 指定解析环境为node
console.log('auto-cli....')

const program = require('commander') //命令行工具
program.version(require('../package.json').version) // 或直接写 '1.0.1'

program
    .command('init <name>') // 定义init命令
    .description('init project')
    .action(name => { // 指定命令要做什么事，回调函数中实现命令功能
        console.log('init ' + name);
    })

program.parse(process.argv)
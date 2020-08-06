/**
 * @module 常量定义模块
 * @overview 项目中用到的常量文本
 */

import en_us from './en_us';
import zh_cn from './zh_cn';

let lang = localStorage.getItem("LANG")

window.source = lang === 'en' ? en_us : zh_cn
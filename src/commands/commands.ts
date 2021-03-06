import vscode from 'vscode';

import openDocumentByReference from './openDocumentByReference';
import openTodayNote from './openTodayNote';
import openRandomNote from './openRandomNote';
import { cacheWorkspace, cleanWorkspaceCache, getWorkspaceCache } from '../utils';

const commands = [
  vscode.commands.registerCommand('_memo.openDocumentByReference', openDocumentByReference),
  vscode.commands.registerCommand('_memo.cacheWorkspace', cacheWorkspace),
  vscode.commands.registerCommand('_memo.cleanWorkspaceCache', cleanWorkspaceCache),
  vscode.commands.registerCommand('_memo.getWorkspaceCache', getWorkspaceCache),
  vscode.commands.registerCommand('memo.openRandomNote', openRandomNote),
  vscode.commands.registerCommand('memo.openTodayNote', openTodayNote),
];

export default commands;

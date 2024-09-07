import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const initializeStatusBarCommands = () => {
    context.subscriptions.forEach((subscription) => subscription.dispose());

    const commands = vscode.workspace.getConfiguration('statusbarCommands').get<
      {
        icon: string;
        command: string;
        name: string | undefined;
        color: string | undefined;
      }[]
    >('commands', []);
    const showError = vscode.workspace
      .getConfiguration('statusbarCommands')
      .get<boolean>('showErrorWhenNoCommands', true);

    if (commands && commands.length > 0) {
      commands.forEach((cmd, index) => {
        let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100 - index);
        statusBarItem.text = `$(${cmd.icon})`;
        statusBarItem.command = `statusbar-commands.runUserCommand${index}`;
        statusBarItem.tooltip = cmd.name || '';

        if (cmd.color) {
          statusBarItem.color = cmd.color;
        }

        statusBarItem.show();

        let disposable = vscode.commands.registerCommand(`statusbar-commands.runUserCommand${index}`, async () => {
          await vscode.commands.executeCommand(cmd.command);
        });

        context.subscriptions.push(statusBarItem);
        context.subscriptions.push(disposable);
      });
    } else if (showError) {
      vscode.window
        .showErrorMessage('No commands defined in settings.', 'Configure Now', "Don't Show Again")
        .then((selection) => {
          if (selection === 'Configure Now') {
            vscode.commands.executeCommand('workbench.action.openSettings', 'statusbarCommands.commands');
          } else if (selection === "Don't Show Again") {
            vscode.commands.executeCommand(
              'workbench.action.openSettings',
              'statusbarCommands.showErrorWhenNoCommands'
            );
          }
        });
    }
  };

  initializeStatusBarCommands();

  let configChangeTimeout: NodeJS.Timeout | undefined;

  vscode.workspace.onDidChangeConfiguration((event) => {
    if (
      event.affectsConfiguration('statusbarCommands.commands') ||
      event.affectsConfiguration('statusbarCommands.showErrorWhenNoCommands')
    ) {
      if (configChangeTimeout) {
        clearTimeout(configChangeTimeout);
      }

      configChangeTimeout = setTimeout(() => {
        initializeStatusBarCommands();
      }, 300);
    }
  });
}

export function deactivate() {}

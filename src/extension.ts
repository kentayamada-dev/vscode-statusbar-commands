import vscode from 'vscode';

type Command = { args?: any[], statusBarText: string; command: string; tooltipText?: string; color?: string };
type Alignment = 'Left' | 'Right';

export const activate = (context: vscode.ExtensionContext) => {
  const configureNow = 'Configure Now';
  const dontShowAgain = "Don't Show Again";

  const showConfigurationError = () => {
    vscode.window
      .showErrorMessage('No commands defined in settings.', configureNow, dontShowAgain)
      .then((selection) => {
        if (selection === configureNow) {
          vscode.commands.executeCommand('workbench.action.openSettings', 'statusbarCommands.commands');
        } else if (selection === dontShowAgain) {
          vscode.commands.executeCommand('workbench.action.openSettings', 'statusbarCommands.showErrorWhenNoCommands');
        }
      });
  };

  const createStatusBarItem = (cmd: Command, index: number, alignment: vscode.StatusBarAlignment) => {
    const statusBarItem = vscode.window.createStatusBarItem(alignment);
    statusBarItem.text = cmd.statusBarText;
    statusBarItem.command = `statusbar-commands.runUserCommand${index}`;
    statusBarItem.tooltip = cmd.tooltipText;
    statusBarItem.color = cmd.color;
    statusBarItem.show();
    return statusBarItem;
  };

  const registerCommand = (cmd: Command, index: number) => {
    return vscode.commands.registerCommand(
      `statusbar-commands.runUserCommand${index}`,
      async () => {
        if (cmd.args && cmd.args.length > 0) {
          await vscode.commands.executeCommand(
            cmd.command,
            ...cmd.args
          );
        } else {
          await vscode.commands.executeCommand(cmd.command);
        }
      }
    );
  };

  const initializeStatusBarCommands = () => {
    context.subscriptions.forEach((subscription) => subscription.dispose());

    const alignment =
      vscode.workspace.getConfiguration('statusbarCommands').get<Alignment>('alignment', 'Right') === 'Left'
        ? vscode.StatusBarAlignment.Left
        : vscode.StatusBarAlignment.Right;

    const commands = vscode.workspace.getConfiguration('statusbarCommands').get<Command[]>('commands', []);

    const showError = vscode.workspace
      .getConfiguration('statusbarCommands')
      .get<boolean>('showErrorWhenNoCommands', true);

    if (commands && commands.length > 0) {
      commands.forEach((cmd, index) => {
        const statusBarItem = createStatusBarItem(cmd, index, alignment);
        const commandDisposable = registerCommand(cmd, index);

        context.subscriptions.push(statusBarItem);
        context.subscriptions.push(commandDisposable);
      });
    } else if (showError) {
      showConfigurationError();
    }
  };

  initializeStatusBarCommands();

  vscode.workspace.onDidChangeConfiguration((event) => {
    const affectedConfig = [
      'statusbarCommands.commands',
      'statusbarCommands.showErrorWhenNoCommands',
      'statusbarCommands.alignment'
    ];

    if (affectedConfig.some((config) => event.affectsConfiguration(config))) {
      initializeStatusBarCommands();
    }
  });
};

# VSCode Statusbar Commands

This VSCode extension allows you to add custom commands to the status bar for quick and easy access, helping to streamline your workflow.

## Features

- Add custom commands to the status bar with user-defined text and icons.
- Customize the color of status bar items for better visual distinction.
- Hover tooltips display the name and description of the command.
- Automatically refreshes status bar items when configuration changes occur.
- Option to show an error message when no commands are configured, with a prompt to configure them directly from the settings.
- Easily align commands to the left or right of the status bar with a configurable setting.

### Demo

![Demo Gif](https://github.com/kentayamada-dev/vscode-statusbar-commands/raw/main/assets/demo.gif)

## Requirements

This extension does not have any additional dependencies. It requires Visual Studio Code version 1.71.0 or higher.

## Extension Settings

This extension contributes the following settings:

- `statusbarCommands.commands`: An array of objects representing commands to add to the status bar. Each command includes:

  - `statusBarText`: The text displayed in the status bar, and users can using the `$(star)` syntax to display icons from the [VS Code icon set](https://code.visualstudio.com/api/references/icons-in-labels#icon-listing).
  - `command`: The ID of the VSCode command to run when the status bar item is clicked.
  - `tooltipText`: (Optional) The text to display as a tooltip when hovering over the status bar item.
  - `color`: (Optional) The color of the status bar item text (e.g., `#ff0000`, `red`). Accepts any valid CSS color value.

- `statusbarCommands.alignment`: Controls the alignment of the status bar commands (either `Left` or `Right`). Default is `Right`.

- `statusbarCommands.showErrorWhenNoCommands`: A boolean setting to show an error message when no commands are defined. Default is `true`.

## Contributions

We love contributions from everyone - whether you’re reporting bugs, requesting features, improving docs, or sending code! Below is how to get started and contribute.

### Local Development Setup

We use [VS Code Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) to standardize our development environment. The dev container configuration files are already provided in the `.devcontainer/` folder.

1. Install the **Dev Containers** extension in VS Code.
2. Clone this repository.
3. From the Command Palette (⇧⌘P / Ctrl+Shift+P), choose **Dev Containers: Reopen in Container**.
4. Once inside, your dev environment is ready!

## Known Issues

- No issues have been reported yet. Please report any issues you encounter via the [GitHub issues page](https://github.com/kentayamada-dev/vscode-statusbar-commands/issues).

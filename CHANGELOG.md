### Changelog

## [2.1.0] - 2025-06-23

### Added

- **Command Arguments**: Support for an optional `args` array for each command.

## [2.0.3] - 2024-09-19

### Improved

- **Faster and Smaller Extension**: We’ve optimized how the extension is built, making it faster to load and reducing its overall size.
- **Enhanced Reliability**: The way the extension handles commands and updates has been improved, ensuring a smoother and more dependable experience.

## [2.0.2] - 2024-09-09

### Changed

- **Performance and Stability Improvements**: Made improvements to how status bar commands are managed and reinitialized, ensuring better performance and a more reliable experience when updating settings.
- **Refinements in Configuration Handling**: The extension now responds more efficiently to configuration changes, ensuring that commands are updated correctly without unnecessary reinitialization.

## [2.0.1] - 2024-09-07

### Changed

- **Documentation Update**: Updated the README file to reflect the latest features and usage instructions. The new documentation includes details on the `statusBarText`, `tooltipText`, and command alignment settings.
  - No functional changes have been made to the extension.

## [2.0.0] - 2024-09-07

### Breaking Changes

- **Renamed Configuration Properties**:
  - `text` is now `statusBarText`. This property defines the text displayed in the status bar, and users can continue using the `$(star)` syntax to display icons (pictograms) from the [VS Code icon set](https://code.visualstudio.com/api/references/icons-in-labels#icon-listing).
  - `tooltip` is now `tooltipText`. This property defines the text shown when hovering over the status bar item.
  - **Important**: Users must update their configuration in `settings.json` to reflect these new property names.

### Removed

- **Removed `icon` and `name` Properties**: The `statusBarText` now serves as the primary visual element in the status bar, and tooltips are defined using `tooltipText`. Users should update their configurations to rely on these properties.

### Added

- **Pictogram Usage**: Users can now use the `$(star)` format for adding pictograms directly in the `statusBarText` field. This allows for better customization of status bar icons using the [VS Code icon set](https://code.visualstudio.com/api/references/icons-in-labels#icon-listing).

## [1.2.0] - 2024-09-06

### Added

- **Configurable Status Bar Alignment**: Users can now choose whether the status bar commands align to the left or right using the new `statusbarCommands.alignment` configuration.
  - Supports `"Left"` or `"Right"` values for alignment.
  - Enhances the flexibility of status bar item placement based on user preference.

## [1.1.1] - 2024-09-06

### Changed

- **Debounced Configuration Changes**: Implemented debouncing for configuration changes to prevent multiple rapid reinitializations of the status bar commands when the user updates settings frequently. This optimizes performance and avoids unnecessary reloading.

## [1.1.0] - 2024-09-06

### Added

- **Customizable Icon Colors**: Users can now customize the color of icons in the status bar using the `color` property in the `statusbarCommands.commands` configuration.
  - Supports any valid CSS color (e.g., `#ff0000`, `red`).
  - Enhances the ability to personalize the appearance of status bar items.
- **Improved Flexibility**: Expanded configuration options to further enhance the customization and user experience of the extension.

## [1.0.0] - 2024-09-04

### Added

- **Initial Release**: First version of the VSCode Statusbar Commands extension.
- **Custom Status Bar Commands**: Ability to define custom commands that appear in the status bar via the `statusbarCommands.commands` configuration.
- **Icon Display**: Displays user-defined icons for commands in the status bar.
- **Tooltips**: Tooltip support showing the command's name when hovering over the status bar item.
- **Auto-reinitialize**: Automatically re-initializes status bar commands when configuration changes are detected.
- **Error Handling**: Configurable option (`statusbarCommands.showErrorWhenNoCommands`) to display an error message if no commands are defined.
- **User Prompt**: Provides a prompt for users to configure commands or disable error messages directly from the error dialog.

---

This change log now accurately reflects your version `2.0.1` update, which is a non-functional update focused on documentation.

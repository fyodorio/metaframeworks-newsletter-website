# Automatic Code Formatting with Prettier

## Description

This rule ensures that all project files are automatically formatted using Prettier according to the project's configuration after any file updates.

## Rule

After any file update in the project, run Prettier to format the modified files according to the project's configuration.

## Implementation

```json
{
  "on": "file_save",
  "run": "npm run format"
}
```

## Explanation

The rule triggers on every file save and runs the project's predefined format script, which uses Prettier with the project's configuration to format files in the `src` directory.

## Benefits

- Maintains consistent code style across the project
- Eliminates manual formatting tasks
- Ensures all code follows the project's formatting standards
- Reduces code review friction by maintaining consistent formatting

## Notes

- The formatting is handled by the project's existing Prettier configuration
- The format script is defined in package.json and targets files in the src directory
- Supports various file types including .css, .js, .ts, and .astro files 
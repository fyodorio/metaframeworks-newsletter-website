# Dependency Management Rules

## Overview

These rules govern how dependencies should be installed and maintained in the project. The primary goal is to ensure reproducible builds and prevent unexpected updates that could break the application.

## Rules

### 1. Strict Semantic Versioning

- **Rule**: Always use exact/strict versions for all dependencies
- **Pattern**: `"package-name": "X.Y.Z"` (no ^ or ~ prefixes)
- **Example**: `"astro": "5.5.2"` instead of `"astro": "^5.5.2"`

#### Why?
- Ensures reproducible builds across different environments
- Prevents unexpected updates that might introduce breaking changes
- Makes dependency updates explicit and intentional
- Improves project stability and predictability

#### How to Apply
1. When installing new packages:
   ```bash
   npm install package-name@X.Y.Z --save-exact
   ```
   or
   ```bash
   yarn add package-name@X.Y.Z --exact
   ```

2. For existing dependencies:
   - Remove all ^ and ~ prefixes from version numbers
   - Use the exact version number currently working in your project

### 2. Version Management

- Review and update dependencies regularly but intentionally
- Test thoroughly after any dependency updates
- Document significant dependency updates in commit messages
- Keep a changelog for major dependency version changes

### 3. Security Considerations

- Regularly run security audits: `npm audit` or `yarn audit`
- Address security vulnerabilities promptly
- Consider using tools like Dependabot or Snyk for automated security updates

## Enforcement

These rules are enforced through:
1. Pattern matching in code reviews
2. Pre-commit hooks (recommended)
3. CI/CD pipeline checks
4. Regular dependency audits

## Exceptions

If a specific package requires flexible versioning for compatibility reasons, document the exception in the project documentation and get team approval before implementing. 
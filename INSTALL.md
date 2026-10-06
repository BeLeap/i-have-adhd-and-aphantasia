# How to install

## Claude Code

### Install

```bash
claude plugin marketplace add chpl/i-have-adhd-and-aphantasia
claude plugin install i-have-adhd@i-have-adhd
```

Restart Claude Code. The plugin ships the `i-have-adhd` output style with `force-for-plugin: true`, so the style applies to every session automatically — no command needed.

### Verify

```bash
claude plugin list
```

The style shows under **Output style** in `/config`.

### Update

```bash
claude plugin marketplace update i-have-adhd
```

### Turn off

There is no in-conversation switch. Either disable the plugin:

```bash
claude plugin disable i-have-adhd
```

or uninstall it:

```bash
claude plugin uninstall i-have-adhd
claude plugin marketplace remove i-have-adhd
```

### Migrating from the hook version (≤0.1.x)

Versions up to 0.1.x injected the ruleset with a `SessionStart` hook gated on a flag file. The hook is gone; the flag does nothing now. Remove it:

```bash
rm -f ~/.claude/.i-have-adhd-always
```

(Use `$CLAUDE_CONFIG_DIR/.i-have-adhd-always` if you moved your config dir.)

## Pi

### Install

If you installed the earlier `ayghri/i-have-adhd` Pi package, remove it first to avoid loading both rule sets:

```bash
pi remove https://github.com/ayghri/i-have-adhd
```

Install the Pi package from this fork:

```bash
pi install git:github.com/BeLeap/i-have-adhd-and-aphantasia
```

Pi loads the extension automatically. The extension adds the existing output-style rules to Pi's structured system prompt before every agent turn.

Run `/reload` in an open Pi session after installing or updating the package.

### Remove

```bash
pi remove git:github.com/BeLeap/i-have-adhd-and-aphantasia
```

<p align="center">
  <img src="./logo.png" alt="i-have-adhd" width="140" />
</p>
<p align="center">
  <strong align="center">ADHD-friendly outputs. No ADHD diagnosis needed!</strong>
</p>
<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/chpl/i-have-adhd-and-aphantasia?style=flat" alt="License"></a>
</p>

## Install

🔗 [Installation Instructions](INSTALL.md)

## What it does

A Claude Code plugin and Pi package that stop the agent from burying the answer. Action first. Steps numbered. No "Hope this helps!" The style applies automatically while the integration is enabled.

Pi loads the style through an extension that adds the existing rules to a structured system-prompt section before each agent turn. The Claude Code output style remains the source of truth.


## What changes


<table>
<tr>
<td width="50%">

## Before

> Great question! Let me think about this. Your auth flow has a few moving pieces: the middleware, the token verification, and the cookie handling. Looking at `src/auth.ts`, the `verifyToken` function (around lines 42-58) seems to be using an older `jsonwebtoken` API. One approach would be to update the package and rewrite that function. After making the change, you'd want to run the auth tests to confirm nothing breaks. By the way, you might also want to look at your dependency versions overall. Hope this helps! Let me know if you want to dig deeper.

</td>

<td width="50%">

## After

> Run `npm install jsonwebtoken@latest`, then edit `src/auth.ts:42`.
>
> 1. Open `src/auth.ts`
> 2. Replace `verifyToken` (lines 42–58) with the snippet below
> 3. Run `npm test -- auth.spec.ts`
>
> Next: paste the first failing line if any test fails.

</td>
</tr>
</table>


## The rules

20 rules. Full text in [output-styles/i-have-adhd.md](./output-styles/i-have-adhd.md).

Response shape:

1. Lead with the next action.
2. Number multi-step tasks.
3. End with one concrete next step.
4. Suppress tangents.
5. Restate state every turn.
6. Specific time estimates (minutes, not "a bit").
7. Make wins visible.
8. Matter-of-fact errors.
9. Cap lists at 5 items.
10. No preamble. No recap. No closers.
11. No visual analogies, no requests to imagine.
12. Put structure on screen, never in the reader's head.
13. Name things instead of locating them.
14. No mental diffing: print the full replacement block.

Sentence shape, adapted from [ASD-STE100](https://www.asd-ste100.org/) (Simplified Technical English). The sentence rules apply to all prose. Code, commands, and identifiers are exempt:

15. Active voice with a named actor.
16. One statement per sentence, at most 20-25 words, no semicolons.
17. One name per thing, one verb per action, no phrasal verbs.
18. No dropped words: keep the subject, verb, and article.
19. Keep hedges ("may have failed" is not "failed"). Simple tenses.
20. One topic per paragraph, at most 6 sentences.

## Tune it

Fork, edit `output-styles/i-have-adhd.md`, then swap your copy in:

```bash
claude plugin uninstall i-have-adhd            # drop the upstream copy first:
claude plugin marketplace remove i-have-adhd   # fork and upstream share both names
claude plugin marketplace add <your-username>/i-have-adhd-and-aphantasia
claude plugin install i-have-adhd@i-have-adhd
```

Restart Claude Code. The style applies automatically.

## Credits

Loosely based on *The Adult ADHD Tool Kit* by J. Russell Ramsay and Anthony L. Rostain. Adapted for how an LLM should respond, not how a human should organize their day.

Sentence rules adapted from the structural rules of [ASD-STE100](https://www.asd-ste100.org/) (Simplified Technical English), by way of [danyuchn/asd-ste100-skill](https://github.com/danyuchn/asd-ste100-skill). The ~900-word STE dictionary is not reproduced.

## License

MIT.

Star ⭐ if it saved you one scroll past one "Great question!"

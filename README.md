# INDECISIVE¿

A weighted decision-wheel spinner that installs to your phone and works offline. Add options, give them weights, flick the wheel, let fate (or physics) pick.

**Live:** https://ejbur158x.github.io/decision_wheel/

## Features

- **Weighted wheel.** Every option gets its own weight and color. Bigger weight, bigger slice.
- **Swipe-to-spin physics.** Finger velocity sets the spin. A "wheel weight" slider controls how long it coasts.
- **Fidget mode.** Spin it just to spin it. Live RPM badge (capped at 1000 RPM), momentum stacks with repeated swipes, and it still picks a winner when it stops.
- **Juke mode.** Once the pointer is crawling through its final slice, there's a 50/50 chance it swerves to the slice before or after. Whatever it lands on is the winner.
- **Templates.** Yes/No, Magic 8-Ball style answers, d6 / d20, Rock Paper Scissors, Truth or Dare, food / movie / chore pickers, or Custom.
- **Wheel management.** Rename, duplicate, delete. Export / import as JSON (one wheel or all wheels) via share sheet, download, clipboard, or file picker.
- **Motion blur** that thins itself out on slower devices so it never drags the physics down.
- **Confetti** on result.
- **Offline PWA.** Add to Home Screen on iOS. Josefin Sans is embedded in `index.html`, so no network is needed for fonts.

## Run it

It's a static site. Open `index.html` through any static server, or use the live link above. To install on iPhone: open in Safari, Share, Add to Home Screen.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app (UI, wheel physics, templates, embedded font) |
| `sw.js` | Service worker for offline use (`CACHE_NAME` is currently `indecisive-v8`) |
| `manifest.json` | PWA manifest (name, colors, icons) |
| `icons/` | App icons (180, 192, 512) |
| `indecisive-logo.png` | Logo lockup |
| `JosefinSans.woff2`, `OFL-LICENSE.txt` | Font and its license (SIL OFL) |

## Known issues / to-do

- `fonts/BricolageGrotesque.woff2` from an earlier version should be deleted from any old deploys.
- Tick sounds while spinning (iOS Safari has no vibration API).
- Decide whether templates should also appear in the wheel-selector dropdown, not only the ＋ sheet.
- Remember to bump `CACHE_NAME` in `sw.js` whenever `index.html` changes, or returning devices will keep the old copy.

## Credits

Font: Josefin Sans, SIL Open Font License 1.1.

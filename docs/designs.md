# Portfolio design implementation

## Source of truth

- Figma file: [Figma basics](https://www.figma.com/design/av2IbEdPbvkw340VoF9ibc/Figma-basics)
- File key: `av2IbEdPbvkw340VoF9ibc`
- Page: `Figma Basics` (`1669:162202`)
- Repository: [Bnuevo/personal-portfolio](https://github.com/Bnuevo/personal-portfolio)

The owner's direction is to **follow the designs closely** for the personal website. Use the screen links in the [README](../README.md) to inspect each design before implementing it.

## Screen mapping

| Website area | Figma node ID |
| --- | --- |
| Home | `610:17` |
| About | `611:48` |
| Projects | `611:146` |
| Contact / Find Me | `611:109` |
| Shared navigation | `611:47` |
| Side menu | `611:37` |
| Color palette | `611:45` |

## Implementation direction

- Preserve the landscape hero, large layered name treatment, deep green panels, and gold contact button shown in the home design.
- Match spacing, typography, colors, and asset placement to the relevant Figma screen. Read exact values from Figma instead of guessing.
- Adapt desktop layouts for smaller screens while preserving their hierarchy and visual identity.
- Make navigation and menu controls functional, keyboard accessible, and connected to the corresponding website pages or sections.
- Use original design assets stored in the repository. Temporary Figma download URLs must not become runtime asset URLs.
- Preserve and inspect the existing website files before replacing or extending them.
- Obtain actual project destinations, social profile links, resume, and contact details from the owner when needed. Do not invent these or claim a contact form sends messages without a working submission mechanism.
- Compare the rendered implementation against the Figma screens before considering it complete.

The React implementation in `src/` follows these screens, with responsive layouts, functional navigation, a resume preview and PDF link, and an email draft form. The empty photo collage from Figma is preserved; project URLs and Instagram await supplied destinations. This does not establish automatic Figma synchronization.

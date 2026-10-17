# Brian Nuevo — Personal Portfolio

Source repository for my personal portfolio website.

## Figma designs

The website should follow the [Figma basics designs](https://www.figma.com/design/av2IbEdPbvkw340VoF9ibc/Figma-basics) closely. Preserve their visual style, layout, typography, colors, and imagery while making the implementation responsive and accessible.

| Design | Figma reference |
| --- | --- |
| Home Page | [View design](https://www.figma.com/design/av2IbEdPbvkw340VoF9ibc/Figma-basics?node-id=610-17) |
| About Page | [View design](https://www.figma.com/design/av2IbEdPbvkw340VoF9ibc/Figma-basics?node-id=611-48) |
| Projects Hero | [View design](https://www.figma.com/design/av2IbEdPbvkw340VoF9ibc/Figma-basics?node-id=611-146) |
| Find Me / Contact | [View design](https://www.figma.com/design/av2IbEdPbvkw340VoF9ibc/Figma-basics?node-id=611-109) |
| Navigation bar | [View design](https://www.figma.com/design/av2IbEdPbvkw340VoF9ibc/Figma-basics?node-id=611-47) |
| Side menu | [View design](https://www.figma.com/design/av2IbEdPbvkw340VoF9ibc/Figma-basics?node-id=611-37) |
| Color palette | [View design](https://www.figma.com/design/av2IbEdPbvkw340VoF9ibc/Figma-basics?node-id=611-45) |

These links reference the original Figma file; viewing them requires the appropriate Figma access. They do not automatically synchronize design changes with the website.

## Existing website files

- `pages/Home.html`: existing home page.
- `pages/Monkeyrock.svg`: existing landscape asset.

See [the implementation guidance](docs/designs.md) when building from the designs.

## Run the React website

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the URL printed by Vite. The four screens are available at `#home`, `#about`, `#projects`, and `#contact`.

```sh
npm test
npm run build
npm run preview
```

The production build is written to `dist/`. Edit `src/content.js` to update contact details, project URLs, and the resume path. Original Figma assets, fonts (with licenses), and the resume are bundled under `public/assets/`.

The contact form prepares an email draft in the visitor's email app. It does not use a server or send mail automatically. Project destinations and the Instagram profile remain unset until their real URLs are supplied. The About collage preserves the photo spaces from Figma until personal photos are supplied.

Deployment scope: keep this website in GitHub only. Do not upload or deploy it to OpenAI Sites or another hosting service unless explicitly requested.

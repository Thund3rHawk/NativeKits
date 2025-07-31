# NativeKits

[![npm version](https://badge.fury.io/js/nativekit.svg)](https://badge.fury.io/js/nativekit)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A beautiful, TypeScript-first React Native UI component library with support for both CLI and Expo workflows. Create stunning mobile experiences with our customizable and accessible components.

## ✨ Features

- 🎯 **TypeScript First**: Built with TypeScript for better developer experience and type safety
- 📱 **Cross Platform**: Works seamlessly with both React Native CLI and Expo managed workflows
- 🎨 **Fully Customizable**: Every component is fully customizable with theme support and style overrides
- ⚡ **Performance Optimized**: Smooth animations with react-native-reanimated
- 🔧 **Easy Integration**: Simple installation and setup process
- 📚 **Comprehensive Documentation**: Detailed docs with live examples and mobile previews

## 📦 Installation

### React Native CLI

```bash
npm install nativekits react-native-reanimated
# or
yarn add nativekits react-native-reanimated
```

For iOS, you'll also need to run:
```bash
cd ios && pod install
```

### Expo Managed Workflow

```bash
npx expo install nativekits react-native-reanimated
```

## 🚀 Quick Start

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Accordion, AccordionItem } from 'nativekits';

const App = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Accordion allowMultiple={true}>
        <AccordionItem title="Getting Started">
          <Text>Welcome to React Native UI Components!</Text>
        </AccordionItem>
        <AccordionItem title="Customization">
          <Text>All components are fully customizable.</Text>
        </AccordionItem>
        <AccordionItem title="TypeScript Support">
          <Text>Built with TypeScript for better DX.</Text>
        </AccordionItem>
      </Accordion>
    </View>
  );
};

export default App;
```

## 📁 Folder Structure

```
react-native-ui-lib/
├── 📁 src/                          # Source code
│   ├── 📁 components/               # UI Components
│   │   └── 📁 Accordion/           # Accordion component
│   │       ├── Accordion.tsx       # Main Accordion component
│   │       ├── AccordionItem.tsx   # Individual item component
│   │       ├── types.ts            # TypeScript definitions
│   │       └── index.ts            # Component exports
│   ├── 📁 theme/                   # Theme system
│   │   ├── index.ts               # Default theme
│   │   └── types.ts               # Theme type definitions
│   └── index.ts                   # Main library exports
│
├── 📁 docs/                        # Documentation website (Next.js)
│   ├── 📁 app/                     # Next.js app directory
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Homepage
│   ├── 📁 components/              # Doc components
│   │   ├── AccordionExample.tsx   # Live accordion demo
│   │   ├── CodeBlock.tsx          # Code syntax highlighting
│   │   └── MobilePreview.tsx      # Mobile device mockup
│   ├── next.config.js             # Next.js configuration
│   ├── package.json               # Docs dependencies
│   ├── postcss.config.js          # PostCSS config
│   ├── tailwind.config.js         # Tailwind CSS config
│   └── tsconfig.json              # TypeScript config
│
├── 📁 lib/                         # Compiled output (auto-generated)
├── 📁 node_modules/                # Dependencies
├── .eslintrc.js                   # ESLint configuration
├── .gitignore                     # Git ignore rules
├── expo-module.config.json        # Expo module config
├── jest.config.js                 # Jest testing config
├── jest.setup.js                  # Jest setup file
├── metro.config.js                # Metro bundler config
├── package.json                   # Project dependencies
├── react-native.config.js         # RN CLI configuration
├── README.md                      # This file
└── tsconfig.json                  # TypeScript configuration
```

### 📂 Key Directories Explained

- **`src/`**: Contains all the source code for the UI components
  - **`components/`**: Individual UI components, each in their own folder
  - **`theme/`**: Theme system with colors, spacing, typography definitions
  
- **`docs/`**: Next.js documentation website with live examples
  - **`components/`**: React components specific to the documentation site
  - **`app/`**: Next.js 13+ app directory structure
  
- **`lib/`**: Auto-generated compiled TypeScript output (created by `npm run build`)

## 🎨 Components

### Accordion

A collapsible content component perfect for FAQs, settings panels, and content organization.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `allowMultiple` | `boolean` | `false` | Allow multiple items to be expanded simultaneously |
| `defaultExpandedItems` | `number[]` | `[]` | Array of item indices to expand by default |
| `containerStyle` | `ViewStyle` | `undefined` | Custom styles for the accordion container |
| `itemSpacing` | `number` | `8` | Spacing between accordion items |

#### AccordionItem Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | The title text for the accordion item |
| `titleStyle` | `TextStyle` | `undefined` | Custom styles for the title text |
| `containerStyle` | `ViewStyle` | `undefined` | Custom styles for the item container |
| `contentStyle` | `ViewStyle` | `undefined` | Custom styles for the content area |
| `iconColor` | `string` | `'#007AFF'` | Color of the expand/collapse icon |
| `animationDuration` | `number` | `300` | Animation duration in milliseconds |

#### Example

```tsx
import { Accordion, AccordionItem, theme } from 'nativekits';

<Accordion 
  allowMultiple={false}
  defaultExpandedItems={[0]}
  containerStyle={{ padding: 16 }}
>
  <AccordionItem 
    title="Custom Styled Section"
    titleStyle={{ 
      color: theme.colors.primary,
      fontSize: 18 
    }}
    iconColor={theme.colors.secondary}
  >
    <Text>Your content here...</Text>
  </AccordionItem>
</Accordion>
```

## 🎨 Theming

The library comes with a built-in theme system that you can customize:

```tsx
import { theme } from 'nativekits';

// Access theme values
const primaryColor = theme.colors.primary;
const mediumSpacing = theme.spacing.md;
const largeBorderRadius = theme.borderRadius.lg;
```

### Theme Structure

```tsx
interface Theme {
  colors: {
    primary: string;        // #007AFF
    secondary: string;      // #5856D6
    background: string;     // #FFFFFF
    surface: string;        // #F8F9FA
    text: string;          // #1C1C1E
    textSecondary: string; // #6C6C70
    border: string;        // #E5E5EA
    shadow: string;        // rgba(0, 0, 0, 0.1)
  };
  spacing: {
    xs: number;    // 4
    sm: number;    // 8
    md: number;    // 16
    lg: number;    // 24
    xl: number;    // 32
  };
  borderRadius: {
    sm: number;    // 4
    md: number;    // 8
    lg: number;    // 12
  };
  typography: {
    fontFamily: string;
    fontSize: {
      sm: number;  // 12
      md: number;  // 14
      lg: number;  // 16
      xl: number;  // 18
    };
    fontWeight: {
      normal: '400';
      medium: '500';
      semibold: '600';
      bold: '700';
    };
  };
}
```

## 🧪 Testing

Run tests with:

```bash
npm test
# or
yarn test
```

Run tests with coverage:

```bash
npm run test:coverage
# or
yarn test:coverage
```

## 🔧 Development

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development: `npm run dev`

### Building

```bash
npm run build
```

### Documentation

To run the documentation site locally:

```bash
cd docs
npm install
npm run dev
```

Visit `http://localhost:3000` to see the documentation.

## 📱 Compatibility

- **React Native**: >= 0.60.0
- **React**: >= 16.8.0
- **TypeScript**: >= 4.0.0
- **iOS**: iOS 11.0+
- **Android**: API level 21+

### Expo Compatibility

This library is fully compatible with:
- Expo SDK 49+
- Expo Go app
- Development builds
- EAS Build

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Run linting: `npm run lint`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React Native](https://reactnative.dev/)
- Animations powered by [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
- Documentation built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

- 📖 [Documentation](https://nativekits.vercel.app)
- 🐛 [Report Issues](https://github.com/thund3rhawk/nativekits/issues)
- 💬 [Discussions](https://github.com/thund3rhawk/nativekits/discussions)

---

Made with ❤️ by thund3rhawk
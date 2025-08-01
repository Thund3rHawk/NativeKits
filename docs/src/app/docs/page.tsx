'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ChevronRight,
  Copy,
  Github,
  Home,
  Smartphone,
  Code,
  Eye,
  Terminal,
} from 'lucide-react';
import Link from 'next/link';

const components = [
  {
    category: 'Getting Started',
    items: [
      { name: 'Installation', id: 'installation' },
      { name: 'Quick Start', id: 'quick-start' },
      { name: 'Configuration', id: 'configuration' },
    ],
  },
  {
    category: 'Components',
    items: [
      { name: 'Button', id: 'button' },
      { name: 'Card', id: 'card' },
      { name: 'Input', id: 'input' },
      { name: 'Modal', id: 'modal' },
      { name: 'List', id: 'list' },
      { name: 'Avatar', id: 'avatar' },
      { name: 'Badge', id: 'badge' },
      { name: 'Switch', id: 'switch' },
    ],
  },
  {
    category: 'Layout',
    items: [
      { name: 'Container', id: 'container' },
      { name: 'Grid', id: 'grid' },
      { name: 'Stack', id: 'stack' },
      { name: 'Divider', id: 'divider' },
    ],
  },
  {
    category: 'Navigation',
    items: [
      { name: 'Tab Bar', id: 'tab-bar' },
      { name: 'Navigation Bar', id: 'navigation-bar' },
      { name: 'Drawer', id: 'drawer' },
    ],
  },
];

const componentData = {
  installation: {
    title: 'Installation',
    description: 'Get started with NativeKit in your React Native project',
    code: `# Install NativeKit
npm install nativekit

# Or with yarn
yarn add nativekit

# Install peer dependencies
npm install react-native-vector-icons react-native-svg`,
    preview: null,
  },
  button: {
    title: 'Button',
    description:
      'A customizable button component with multiple variants and sizes',
    code: `import { Button } from 'nativekit';

export default function App() {
  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Button variant="primary" onPress={() => alert('Primary!')}>
        Primary Button
      </Button>
      
      <Button variant="secondary" onPress={() => alert('Secondary!')}>
        Secondary Button
      </Button>
      
      <Button variant="outline" onPress={() => alert('Outline!')}>
        Outline Button
      </Button>
      
      <Button variant="ghost" onPress={() => alert('Ghost!')}>
        Ghost Button
      </Button>
    </View>
  );
}`,
    preview: (
      <div className="space-y-3">
        <div className="h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-medium">Primary Button</span>
        </div>
        <div className="h-12 bg-gray-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-medium">Secondary Button</span>
        </div>
        <div className="h-12 border-2 border-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-medium">Outline Button</span>
        </div>
        <div className="h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-700 font-medium">Ghost Button</span>
        </div>
      </div>
    ),
  },
  card: {
    title: 'Card',
    description: 'A flexible container component for displaying content',
    code: `import { Card, CardHeader, CardContent } from 'nativekit';

export default function App() {
  return (
    <Card style={{ margin: 20 }}>
      <CardHeader>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Card Title
        </Text>
        <Text style={{ color: '#666' }}>
          Card subtitle or description
        </Text>
      </CardHeader>
      <CardContent>
        <Text>
          This is the main content of the card. You can put any 
          content here including images, buttons, or other components.
        </Text>
      </CardContent>
    </Card>
  );
}`,
    preview: (
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <div className="mb-3">
          <h3 className="font-bold text-lg">Card Title</h3>
          <p className="text-sm text-gray-600">Card subtitle or description</p>
        </div>
        <p className="text-sm">
          This is the main content of the card. You can put any content here
          including images, buttons, or other components.
        </p>
      </div>
    ),
  },
  input: {
    title: 'Input',
    description: 'Text input component with validation and styling options',
    code: `import { Input, Label } from 'nativekit';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ padding: 20, gap: 15 }}>
      <View>
        <Label>Email</Label>
        <Input
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      
      <View>
        <Label>Password</Label>
        <Input
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
    </View>
  );
}`,
    preview: (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <div className="h-10 border border-gray-300 rounded-md px-3 flex items-center bg-white">
            <span className="text-gray-400 text-sm">Enter your email</span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="h-10 border border-gray-300 rounded-md px-3 flex items-center bg-white">
            <span className="text-gray-400 text-sm">••••••••</span>
          </div>
        </div>
      </div>
    ),
  },
};

export default function DocsPage() {
  const [selectedComponent, setSelectedComponent] = useState('installation');
  const [activeTab, setActiveTab] = useState('code');

  const currentComponent =
    componentData[selectedComponent as keyof typeof componentData];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-muted/10">
          <ScrollArea className="h-[calc(100vh-3.5rem)] py-6">
            <div className="px-6">
              <h2 className="mb-4 text-lg font-semibold">Documentation</h2>
              <div className="space-y-6">
                {components.map((category) => (
                  <div key={category.category}>
                    <h3 className="mb-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {category.category}
                    </h3>
                    <div className="space-y-1">
                      {category.items.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedComponent(item.id)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors hover:bg-muted ${
                            selectedComponent === item.id
                              ? 'bg-muted font-medium text-foreground'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex">
          {/* Content Area */}
          <div className="flex-1 p-6">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
                <Link href="/docs" className="hover:text-foreground">
                  Documentation
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">
                  {currentComponent?.title}
                </span>
              </div>

              {/* Component Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">
                  {currentComponent?.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {currentComponent?.description}
                </p>
              </div>

              {/* Tabs */}
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="code" className="flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    Code
                  </TabsTrigger>
                  <TabsTrigger value="preview" className="flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="install" className="flex items-center">
                    <Terminal className="h-4 w-4 mr-2" />
                    Install
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="code" className="mt-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg">Example Code</CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(currentComponent?.code || '')
                        }
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{currentComponent?.code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="preview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Component Preview
                      </CardTitle>
                      <CardDescription>
                        This is how the component looks on mobile devices
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-6 rounded-lg">
                        {currentComponent?.preview || (
                          <div className="text-center text-muted-foreground py-8">
                            Preview not available for this component
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="install" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Installation</CardTitle>
                      <CardDescription>
                        How to install and use this component
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">
                          1. Install NativeKit
                        </h3>
                        <div className="bg-muted p-3 rounded-md font-mono text-sm">
                          npm install nativekit
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">
                          2. Import the component
                        </h3>
                        <div className="bg-muted p-3 rounded-md font-mono text-sm">
                          {`import { ${currentComponent?.title} } from 'nativekit';`}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">3. Use in your app</h3>
                        <p className="text-sm text-muted-foreground">
                          Check the code tab for usage examples and props
                          documentation.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Props Documentation */}
              {selectedComponent !== 'installation' && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Props</CardTitle>
                    <CardDescription>
                      Available props for the {currentComponent?.title}{' '}
                      component
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 font-medium">Prop</th>
                            <th className="text-left py-2 font-medium">Type</th>
                            <th className="text-left py-2 font-medium">
                              Default
                            </th>
                            <th className="text-left py-2 font-medium">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 font-mono">variant</td>
                            <td className="py-2 font-mono text-muted-foreground">
                              string
                            </td>
                            <td className="py-2 font-mono text-muted-foreground">
                              "primary"
                            </td>
                            <td className="py-2">The visual style variant</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-mono">size</td>
                            <td className="py-2 font-mono text-muted-foreground">
                              string
                            </td>
                            <td className="py-2 font-mono text-muted-foreground">
                              "medium"
                            </td>
                            <td className="py-2">The size of the component</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 font-mono">disabled</td>
                            <td className="py-2 font-mono text-muted-foreground">
                              boolean
                            </td>
                            <td className="py-2 font-mono text-muted-foreground">
                              false
                            </td>
                            <td className="py-2">
                              Whether the component is disabled
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Mobile Preview Sidebar */}
          {!components[0].items.some(
            (item) => item.id === selectedComponent
          ) && (
            <aside className="w-80 border-l bg-muted/10 p-6">
              <div className="sticky top-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Mobile Preview
                </h3>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl">
                      <div className="w-full h-full bg-white dark:bg-gray-100 rounded-2xl p-4 overflow-hidden">
                        <div className="text-center mb-4">
                          <h4 className="font-bold text-sm text-gray-900">
                            NativeKit Demo
                          </h4>
                          <p className="text-xs text-gray-600">
                            {currentComponent?.title}
                          </p>
                        </div>
                        <div className="space-y-3">
                          {currentComponent?.preview || (
                            <div className="text-center text-gray-500 py-8 text-sm">
                              No preview available
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full mt-1"></div>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <Badge variant="secondary" className="w-full justify-center">
                    iOS & Android Compatible
                  </Badge>
                  <Badge variant="outline" className="w-full justify-center">
                    TypeScript Ready
                  </Badge>
                </div>
              </div>
            </aside>
          )}
        </main>
      </div>
    </div>
  );
}

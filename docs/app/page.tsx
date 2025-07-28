'use client';

import React from 'react';
import MobilePreview from '../components/MobilePreview';
import CodeBlock from '../components/CodeBlock';
import AccordionExample from '../components/AccordionExample';

const installationCode = {
  npm: `npm install nativekit`,
  yarn: `yarn add nativekit`,
  expo: `npx expo install nativekit react-native-reanimated`
};

const basicUsageCode = `import React from 'react';
import { View } from 'react-native';
import { Accordion, AccordionItem } from 'nativekit';

const MyApp = () => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Accordion allowMultiple={true}>
        <AccordionItem title="Section 1">
          <Text>Content for section 1</Text>
        </AccordionItem>
        <AccordionItem title="Section 2">
          <Text>Content for section 2</Text>
        </AccordionItem>
      </Accordion>
    </View>
  );
};

export default MyApp;`;

const advancedUsageCode = `import React from 'react';
import { View, Text } from 'react-native';
import { Accordion, AccordionItem, theme } from 'nativekit';

const CustomAccordion = () => {
  return (
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
        containerStyle={{ 
          backgroundColor: '#f0f8ff',
          borderColor: theme.colors.primary 
        }}
      >
        <Text style={{ color: theme.colors.textSecondary }}>
          This is a custom styled accordion item with theme colors.
        </Text>
      </AccordionItem>
    </Accordion>
  );
};`;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">React Native UI Components</h1>
            <div className="flex space-x-4">
              <a
                href="#installation"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Installation
              </a>
              <a
                href="#docs"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Documentation
              </a>
              <a
                href="https://github.com/yourusername/nativekit"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Beautiful UI Components for{' '}
              <span className="gradient-text">React Native</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A comprehensive TypeScript-first UI library for React Native with support for both CLI and Expo workflows. 
              Create stunning mobile experiences with our customizable and accessible components.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#installation"
                className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#docs"
                className="border border-primary text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                View Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Library?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with modern React Native development in mind, our library provides everything you need to create beautiful, performant mobile applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">TypeScript First</h4>
              <p className="text-gray-600">
                Built with TypeScript from the ground up for better developer experience and type safety.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Cross Platform</h4>
              <p className="text-gray-600">
                Works seamlessly with both React Native CLI and Expo managed workflows.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Fully Customizable</h4>
              <p className="text-gray-600">
                Every component is fully customizable with theme support and style overrides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">See It In Action</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Try out our Accordion component right here. This preview shows exactly how it will look in your React Native app.
            </p>
          </div>
          
          <MobilePreview title="Accordion Component">
            <AccordionExample />
          </MobilePreview>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Installation</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started with React Native UI Components in seconds. Choose your preferred package manager.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3">npm</h4>
              <CodeBlock code={installationCode.npm} language="bash" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Yarn</h4>
              <CodeBlock code={installationCode.yarn} language="bash" />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Expo</h4>
              <CodeBlock code={installationCode.expo} language="bash" />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section id="docs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Documentation</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn how to use our components with comprehensive examples and API documentation.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Basic Usage */}
            <div>
              <h4 className="text-2xl font-semibold mb-4">Basic Usage</h4>
              <p className="text-gray-600 mb-4">
                Here's how to get started with the Accordion component:
              </p>
              <CodeBlock code={basicUsageCode} title="Basic Accordion Example" />
            </div>
            
            {/* Advanced Usage */}
            <div>
              <h4 className="text-2xl font-semibold mb-4">Advanced Customization</h4>
              <p className="text-gray-600 mb-4">
                Customize the appearance and behavior with advanced props:
              </p>
              <CodeBlock code={advancedUsageCode} title="Advanced Accordion Example" />
            </div>
            
            {/* Props Documentation */}
            <div>
              <h4 className="text-2xl font-semibold mb-4">Accordion Props</h4>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Prop</th>
                      <th className="text-left p-4 font-semibold">Type</th>
                      <th className="text-left p-4 font-semibold">Default</th>
                      <th className="text-left p-4 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-mono text-sm">allowMultiple</td>
                      <td className="p-4 text-sm">boolean</td>
                      <td className="p-4 text-sm">false</td>
                      <td className="p-4 text-sm">Allow multiple items to be expanded simultaneously</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm">defaultExpandedItems</td>
                      <td className="p-4 text-sm">number[]</td>
                      <td className="p-4 text-sm">[]</td>
                      <td className="p-4 text-sm">Array of item indices to expand by default</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm">containerStyle</td>
                      <td className="p-4 text-sm">ViewStyle</td>
                      <td className="p-4 text-sm">-</td>
                      <td className="p-4 text-sm">Custom styles for the accordion container</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm">itemSpacing</td>
                      <td className="p-4 text-sm">number</td>
                      <td className="p-4 text-sm">8</td>
                      <td className="p-4 text-sm">Spacing between accordion items</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold mb-4">AccordionItem Props</h4>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Prop</th>
                      <th className="text-left p-4 font-semibold">Type</th>
                      <th className="text-left p-4 font-semibold">Default</th>
                      <th className="text-left p-4 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 font-mono text-sm">title</td>
                      <td className="p-4 text-sm">string</td>
                      <td className="p-4 text-sm">-</td>
                      <td className="p-4 text-sm">The title text for the accordion item</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm">titleStyle</td>
                      <td className="p-4 text-sm">TextStyle</td>
                      <td className="p-4 text-sm">-</td>
                      <td className="p-4 text-sm">Custom styles for the title text</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm">containerStyle</td>
                      <td className="p-4 text-sm">ViewStyle</td>
                      <td className="p-4 text-sm">-</td>
                      <td className="p-4 text-sm">Custom styles for the item container</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm">contentStyle</td>
                      <td className="p-4 text-sm">ViewStyle</td>
                      <td className="p-4 text-sm">-</td>
                      <td className="p-4 text-sm">Custom styles for the content area</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm">iconColor</td>
                      <td className="p-4 text-sm">string</td>
                      <td className="p-4 text-sm">#007AFF</td>
                      <td className="p-4 text-sm">Color of the expand/collapse icon</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-sm">animationDuration</td>
                      <td className="p-4 text-sm">number</td>
                      <td className="p-4 text-sm">300</td>
                      <td className="p-4 text-sm">Animation duration in milliseconds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">React Native UI Components</h3>
            <p className="text-gray-400 mb-6">
              Building beautiful mobile experiences, one component at a time.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                npm
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              © 2025 React Native UI Components. Made with ❤️ for the React Native community.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Code,
  Smartphone,
  Zap,
  Users,
  Star,
  Github,
  Download,
} from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/global/theme-toggle';

export default function HomePage() {
  return (
    <div className="flex flex-col mx-auto min-h-screen">
      <main className="flex-1 mx-auto">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  <Zap className="h-3 w-3 mr-1" />
                  React Native UI Library
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Build Beautiful Mobile Apps
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    {' '}
                    Faster
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  NativeKits is a comprehensive React Native UI library with 50+
                  customizable components, built-in accessibility, and
                  TypeScript support. Ship your mobile app in days, not months.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" asChild>
                  <Link href="/coming_soon">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://github.com/thund3rhawk/nativekits">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              </div>
              {/* <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                  <span>2.1k stars</span>
                </div>
                <div className="flex items-center">
                  <Download className="h-4 w-4 mr-1" />
                  <span>50k+ downloads</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>500+ developers</span>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything you need to build amazing apps
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From basic components to complex layouts, NativeKits provides
                  all the building blocks you need for your React Native
                  applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 text-purple-600" />
                  <CardTitle>50+ Components</CardTitle>
                  <CardDescription>
                    Comprehensive set of UI components including buttons, forms,
                    navigation, and complex layouts.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-blue-600" />
                  <CardTitle>Mobile First</CardTitle>
                  <CardDescription>
                    Designed specifically for mobile experiences with
                    touch-friendly interactions and responsive design.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-green-600" />
                  <CardTitle>TypeScript Ready</CardTitle>
                  <CardDescription>
                    Full TypeScript support with comprehensive type definitions
                    for better developer experience.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section
          id="examples"
          className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center"
          style={{ minHeight: '60vh' }}
        >
          <div className="container px-4 md:px-6 mx-auto flex items-center justify-center">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center mx-auto">
              {/* Left: Text & Code */}
              <div className="space-y-8 flex flex-col items-center w-full">
                <h2 className="text-4xl font-extrabold tracking-tight text-center bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Simple. Powerful. Flexible.
                </h2>
                <p className="text-muted-foreground md:text-lg text-center">
                  Get started with just a few lines of code. NativeKit
                  components are intuitive, easy to use, and highly
                  customizable.
                </p>
                <div className="w-full max-w-lg bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 mx-auto">
                  <div className="flex items-center mb-4">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  </div>
                  <pre className="font-mono text-sm text-gray-100 whitespace-pre-wrap">
                    <span className="text-gray-500">
                      // 🚀 Install NativeKits
                    </span>
                    {'\n'}
                    <span className="text-green-400">
                      $ npm install nativekits
                    </span>
                    {'\n\n'}
                    <span className="text-gray-500">// 💡 Use components</span>
                    {'\n'}
                    <span className="text-blue-400">import</span>{' '}
                    <span className="text-yellow-300">{`{ Button, Card }`}</span>{' '}
                    <span className="text-blue-400">from</span>{' '}
                    <span className="text-green-400">'nativekits'</span>
                    {'\n\n'}
                    <span className="text-purple-400">&lt;Button</span>{' '}
                    <span className="text-blue-400">variant</span>
                    <span className="text-gray-100">=</span>
                    <span className="text-green-400">"primary"</span>
                    <span className="text-purple-400">&gt;</span>
                    {'\n  '}Get Started
                    {'\n'}
                    <span className="text-purple-400">&lt;/Button&gt;</span>
                  </pre>
                </div>
              </div>
              {/* Right: Mobile Preview */}
              <div className="flex justify-center w-full">
                <div className="relative flex justify-center w-full">
                  <div className="w-72 h-[420px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-3 shadow-2xl border border-gray-700 flex items-center justify-center mx-auto">
                    <div className="w-full h-full bg-gradient-to-br from-gray-950 to-gray-900 rounded-2xl p-6 flex flex-col space-y-6">
                      <div className="text-center">
                        <h3 className="font-bold text-lg text-white">
                          Welcome
                        </h3>
                        <p className="text-sm text-gray-400">
                          Built with NativeKits
                        </p>
                      </div>
                      <div className="space-y-4 flex-1">
                        <div className="h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                          <span className="text-white text-sm font-semibold">
                            Primary Button
                          </span>
                        </div>
                        <div className="h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center bg-gray-900">
                          <span className="text-gray-200 text-sm font-medium">
                            Secondary Button
                          </span>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="h-4 bg-gray-700 rounded mb-2"></div>
                          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <span className="text-xs text-gray-500">
                          NativeKits UI Preview
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components Preview */}
        <section
          id="components"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                50+ Ready-to-use Components
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                From basic UI elements to complex components, everything you
                need is included.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: 'Buttons', count: '8 variants' },
                { name: 'Forms', count: '12 components' },
                { name: 'Navigation', count: '6 components' },
                { name: 'Layout', count: '10 components' },
                { name: 'Feedback', count: '8 components' },
                { name: 'Data Display', count: '15 components' },
                { name: 'Media', count: '5 components' },
                { name: 'Overlays', count: '7 components' },
              ].map((category) => (
                <Card key={category.name} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>{category.count}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link href="/coming_soon">
                  Explore All Components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to build your next app?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of developers who are already building amazing
                  mobile experiences with NativeKits.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" asChild>
                  <Link href="/coming_soon">
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/coming_soon">
                    View Examples
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

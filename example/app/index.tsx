import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { 
  Accordion, 
  AccordionItem, 
  Badge, 
  Alert,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardImage
} from 'nativekits';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f5f5' }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>
        NativeKits Demo
      </Text>

      {/* Card Examples */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Card Components</Text>
      
      {/* Basic Card */}
      <Card>
        <CardHeader title="Basic Card" subtitle="This is a simple card example" />
        <CardContent>
          <Text>This is the card content. Cards are great for displaying grouped information.</Text>
        </CardContent>
      </Card>

      {/* Card with Image */}
      <Card variant="outlined">
        <CardImage 
          source={{ uri: 'https://picsum.photos/400/200' }}
          height={150}
        />
        <CardHeader 
          title="Card with Image" 
          subtitle="Featuring a beautiful header image"
          action={<AntDesign name="heart" size={20} color="#ff4444" />}
        />
        <CardContent>
          <Text>This card includes a header image and action buttons.</Text>
        </CardContent>
        <CardFooter showSeparator>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <TouchableOpacity>
              <Text style={{ color: '#007AFF', fontWeight: '500' }}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: '#007AFF', fontWeight: '500' }}>Share</Text>
            </TouchableOpacity>
          </View>
        </CardFooter>
      </Card>

      {/* Pressable Card */}
      <Card 
        variant="filled" 
        pressable 
        onPress={() => alert('Card pressed!')}
      >
        <CardHeader 
          title="Pressable Card" 
          subtitle="Tap me!"
          avatar={<AntDesign name="user" size={24} color="#666" />}
        />
        <CardContent>
          <Text>This card is pressable. Tap anywhere to see the action.</Text>
        </CardContent>
      </Card>

      {/* Different Sizes */}
      <View style={{ gap: 8 }}>
        <Card size="sm">
          <Text>Small Card</Text>
        </Card>
        <Card size="md">
          <Text>Medium Card (Default)</Text>
        </Card>
        <Card size="lg">
          <Text>Large Card</Text>
        </Card>
      </View>

      {/* Badge Examples */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        Badge Component
      </Text>
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="primary" outlined>Outlined</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </View>

      {/* Accordion Example */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        Accordion Component
      </Text>
      <Accordion allowMultiple={false}>
        <AccordionItem title="What is NativeKits?">
          <Text>NativeKits is a beautiful React Native UI component library with TypeScript support.</Text>
        </AccordionItem>
        <AccordionItem title="Features">
          <Text>• TypeScript support{'\n'}• Expo compatibility{'\n'}• Customizable themes{'\n'}• Comprehensive components</Text>
        </AccordionItem>
        <AccordionItem title="Getting Started">
          <Text>Install with: npm install nativekits</Text>
        </AccordionItem>
      </Accordion>

      {/* Alert Examples */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        Alert Component
      </Text>
      <View style={{ gap: 8 }}>
        <Alert type="info">
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <AntDesign name="infocirlceo" size={18} color="#007AFF" />
            <Text>This is an info alert</Text>
          </View>
        </Alert>
        <Alert type="success">
          <Text>This is a success alert</Text>
        </Alert>
        <Alert type="warning">
          <Text>This is a warning alert</Text>
        </Alert>
        <Alert type="error">
          <Text>This is an error alert</Text>
        </Alert>
      </View>
    </ScrollView>
  );
}

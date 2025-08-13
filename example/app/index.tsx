import { Text, View } from 'react-native';
import { Badge } from 'nativekits';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/* <Accordion allowMultiple={true}>
        <AccordionItem title="Item 1">
          <Text>Content 1</Text>
        </AccordionItem>
        <AccordionItem title="Item 2">
          <Text>Content 2</Text>
        </AccordionItem>
      </Accordion> */}
      <Badge>42</Badge>
    </View>
  );
}

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Accordion, AccordionItem } from '../Accordion/index';

describe('Accordion', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Accordion>
        <AccordionItem title="Test Item">
          <Text>Test Content</Text>
        </AccordionItem>
      </Accordion>
    );

    expect(getByText('Test Item')).toBeTruthy();
  });

  it('renders badge with content', () => {
    const tree = render(
      <Accordion>
        <AccordionItem title="Test Item">
          <Text>Test Content</Text>
        </AccordionItem>
      </Accordion>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('expands and collapses on press', () => {
    const { getByText, queryByText } = render(
      <Accordion>
        <AccordionItem title="Test Item">
          <Text>Test Content</Text>
        </AccordionItem>
      </Accordion>
    );

    // Initially collapsed
    expect(queryByText('Test Content')).toBeNull();

    // Press to expand
    fireEvent.press(getByText('Test Item'));
    expect(getByText('Test Content')).toBeTruthy();

    // Press to collapse
    fireEvent.press(getByText('Test Item'));
    expect(queryByText('Test Content')).toBeNull();
  });

  it('supports multiple expanded items when allowMultiple is true', () => {
    const { getByText } = render(
      <Accordion allowMultiple={true}>
        <AccordionItem title="Item 1">
          <Text>Content 1</Text>
        </AccordionItem>
        <AccordionItem title="Item 2">
          <Text>Content 2</Text>
        </AccordionItem>
      </Accordion>
    );

    // Expand both items
    fireEvent.press(getByText('Item 1'));
    fireEvent.press(getByText('Item 2'));

    // Both should be visible
    expect(getByText('Content 1')).toBeTruthy();
    expect(getByText('Content 2')).toBeTruthy();
  });

  it('only allows one expanded item when allowMultiple is false', () => {
    const { getByText, queryByText } = render(
      <Accordion allowMultiple={false}>
        <AccordionItem title="Item 1">
          <Text>Content 1</Text>
        </AccordionItem>
        <AccordionItem title="Item 2">
          <Text>Content 2</Text>
        </AccordionItem>
      </Accordion>
    );

    // Expand first item
    fireEvent.press(getByText('Item 1'));
    expect(getByText('Content 1')).toBeTruthy();

    // Expand second item - first should close
    fireEvent.press(getByText('Item 2'));
    expect(queryByText('Content 1')).toBeNull();
    expect(getByText('Content 2')).toBeTruthy();
  });

  it('respects defaultExpandedItems prop', () => {
    const { getByText } = render(
      <Accordion defaultExpandedItems={[0]}>
        <AccordionItem title="Item 1">
          <Text>Content 1</Text>
        </AccordionItem>
        <AccordionItem title="Item 2">
          <Text>Content 2</Text>
        </AccordionItem>
      </Accordion>
    );

    // First item should be expanded by default
    expect(getByText('Content 1')).toBeTruthy();
  });
});

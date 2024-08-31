import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    // write a simple text to show the user that this is the second tab
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Ionicons name="logo-react" size={250} style={styles.headerImage} />
      }>
      <ExternalLink href="https://www.facebook.com">
        <ThemedText type="defaultSemiBold">Facebook</ThemedText>
      </ExternalLink>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tab Two</ThemedText>
      </ThemedView>
      <Collapsible title="What is this tab for?">
        <ThemedText>
          This tab is a placeholder for you to add your own content. You can use it to show a list
          of items, a form, or any other content you want.
        </ThemedText>
      </Collapsible>
      <Collapsible title="How do I customize this tab?">
        <ThemedText>
          You can customize this tab by editing{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/TabTwoScreen.tsx</ThemedText>. You can also
          add new files and components to this directory.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Where can I learn more?">
        <ThemedText>
          You can learn more about React Navigation by visiting the{' '}
          <ExternalLink href="https://reactnavigation.org/docs/getting-started">
            React Navigation documentation
          </ExternalLink>
          .
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
    );
    
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

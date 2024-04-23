import * as React from 'react';
import { StyleSheet,SafeAreaView,ScrollView,View,Text } from 'react-native';
import { Drawer, Button, Card,Divider,} from 'react-native-paper';
const MyComponent = () => {
  const [active, setActive] = React.useState('');

  return (
    <SafeAreaView  >
    <ScrollView >
     <View >
      <View>
    <Divider style={styles.divider} 
   
    />
    </View>
    <Drawer.Section title="">
       <Card style={styles.card1}>
        <Card.Title title="Offer" subtitle="Discount" />
        <Card.Content>
          <Button>A button inside the card</Button>
        </Card.Content>
      </Card>
      <Drawer.Item
        label="Payments/Wallet"
        icon="credit-card-lock"
        style={[
          styles.drawerItem,
          active === 'first' && styles.activeDrawerItem,
        ]}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="QR Coins"
        icon="hand-coin"
        style={[
          styles.drawerItem,
          active === 'second' && styles.activeDrawerItem,
        ]}
        onPress={() => setActive('second')}
      />
      <Drawer.Item
        label="My Trips"
        icon="car-limousine"
        style={[
          styles.drawerItem,
          active === 'third' && styles.activeDrawerItem,
        ]}
        onPress={() => setActive('third')}
      />
      <Drawer.Item
        label="Saved Places"
        icon="bookmark-multiple"
        style={[
          styles.drawerItem,
          active === 'four' && styles.activeDrawerItem,
        ]}
        onPress={() => setActive('four')}
      />
      <Drawer.Item
        label=" Settings"
        icon="cog"
        style={[
          styles.drawerItem,
          active === 'five' && styles.activeDrawerItem,
        ]}
        onPress={() => setActive('five')}
      />
      <Drawer.Item
        label="Contact Support"
        icon="chat-processing"
        
        style={[
          styles.drawerItem,
          active === 'six' && styles.activeDrawerItem,
        ]}
        onPress={() => setActive('six')}
      />
      <Drawer.Item
        label="About App"
        icon="clock-time-seven"
        style={[
          styles.drawerItem,
          active === 'seven' && styles.activeDrawerItem,
        ]}
        onPress={() => setActive('seven')}
      />
      
       <Card style={styles.card2}>
        <Card.Title title="Cashback" subtitle="coin" />
        <Card.Content>
          <Button>A button inside the card</Button>
        </Card.Content>
      </Card>
      
    </Drawer.Section>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#C9E6D8',
  },
  drawerItem: {
    fontSize: 68,
    backgroundColor: '#fff',
    
  },
  activeDrawerItem: {
    backgroundColor: '#fff', 
    
  },

  card1: {
    marginVertical: 8,
    borderRadius: 40, 
    backgroundColor: '#f0f0f0', 
    height:140,
    width:'90%',
    
   
  },
  card2: {
    marginVertical: 8,
    borderRadius: 40, 
    backgroundColor: '#f0f0f0', 
    height:150,
    flex: 1,
    paddingHorizontal: 16,
    
  },
  divider: {
    marginVertical: 12,
    height: 200,
    backgroundColor: '#ccc',
    borderRadius: 20, 
   
    
  },
});

export default MyComponent;
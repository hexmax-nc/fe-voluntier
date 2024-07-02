import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import { styles } from '../styles';
import { useEffect, useState } from 'react';
import { getListings } from '../api';
import ListingCard from './ListingCard';
import { useNavigation } from '@react-navigation/native'
import SingleListing from './SingleListing';

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [err, setErr] = useState('');
  const navigation = useNavigation()


  useEffect(() => {
    getListings()
      .then((listings) => {
        setListings(listings);
      })
      .catch((error) => {
        console.log(error);
        setErr(error);
      });
  }, []);

  
  const handlePress = (listing) => {
    navigation.navigate('SingleListing', { listing })

    
  }




  return (
    <View style={styles.listingsContainer}>
      <ScrollView>
        {listings.map((listing) => (
          <Pressable key={listing.list_id}
          onPress={() => handlePress(listing)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
              ? 'rgba(0, 0, 0, 0.1)'
                  : 'white',
            }
          ]}>
          <ListingCard
            listing={listing}></ListingCard>
            </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

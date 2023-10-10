import * as React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import TournamentItem from '../components/tournament/Item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tournament from '../models/Tournament';
import axios from 'axios';


export default function TournamentsScreen() {
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [tournaments, setTournaments] = React.useState<Tournament[]>([])
  const [categories, setCategories] = React.useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const loadTournaments = async () => {
    try {
      setIsLoading(true)
      const { data: tournaments } = await axios.get<Tournament[]>(process.env.EXPO_PUBLIC_API_URL + '/tournaments')
      const categories = Array
        .from(new Set(tournaments.map(tournament => tournament.category)))
        .sort((a, b) => a.localeCompare(b))
  
      setTournaments(tournaments)
      setCategories(categories)
      setSelectedCategory(categories[0])
    } catch (error: any) {
      setError(error.message)
    }

    setIsLoading(false)
  }

  React.useEffect(() => {
    loadTournaments()   
  }, [])


  if (error) return <Text>{error}</Text>
  if (isLoading) return <View style={{flex: 1, justifyContent:'center'}}><ActivityIndicator size={'large'} /></View>
  if (!selectedCategory) return <></>

  const selectedTournaments = selectedCategory
    ? tournaments.filter(tournament => tournament.category === selectedCategory)
    : []

  return selectedTournaments.map(tournament => <TournamentItem key={tournament.id} tournament={tournament} />)
  
}
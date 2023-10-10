import * as React from 'react'
import { Text, View } from 'react-native';

import Tournament from "../../models/Tournament";

export default function TournamentItem({ tournament }: { tournament: Tournament }) {
  return (
    <View>
      <Text>{tournament.name}</Text>
    </View>
  )
}
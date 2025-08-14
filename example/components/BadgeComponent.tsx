import { View, Text } from 'react-native'
import React from 'react'
import {Badge} from 'nativekits'

const BadgeComponent = () => {
  return (
    <View>
     <Badge variant="primary" outlined>Outlined Badge</Badge>
    </View>
  )
}

export default BadgeComponent
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Mine () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!123</Text>
    </View>
  )
}

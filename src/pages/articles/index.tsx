import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Articles () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='articles'>
      <Text>Hello world!</Text>
    </View>
  )
}

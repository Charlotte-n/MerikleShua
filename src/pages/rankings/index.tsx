import {memo} from "react";
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import Ranking from "./components/ranking/ranking";


const TabBar = memo(function (){
  return <View className='flex border border-solid border-[white] rounded-sm px-[20rpx]'>
    <View className='pr-[20rpx]  py-[20rpx] border-r border-solid border-[white]'>
      <Text>排行榜</Text>
    </View>
    <View className='pl-[20rpx] py-[20rpx]'>
      <Text>我的成绩</Text>
    </View>
  </View>
})


export default function Rankings () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='rankings h-[100vh] text-[white] '>
      <View className='bg-[#63B0F7] relative flex flex-col h-[40%]'>
        <View className='h-[100%] flex justify-center items-center'>
          <TabBar></TabBar>
        </View>
        <View className='pb-[35rpx] px-[20rpx] absolute bottom-[60rpx]'>
          <Text>课堂排名</Text>
        </View>
        <View className='absolute w-[100vw] bottom-[-50rpx] h-[20%] bg-[white] rounded-2xl px-[50rpx] py-[30rpx]'>
            <Ranking></Ranking>
        </View>
      </View>


    </View>
  )
}

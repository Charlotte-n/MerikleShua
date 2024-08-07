import {View, Text, Swiper, SwiperItem, Image} from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import QIMO from '../../public/img/QIMO.jpeg'
import './index.scss'
import Questions from "./components/questions";

function SwiperCom(){
  return <View className='w-full'>
    <Swiper>
      <SwiperItem>
        <Image src={QIMO as string} className='w-[100%] h-[100%]'></Image>
      </SwiperItem>
    </Swiper>
  </View>
}
function Notification(){
  return <View className='flex justify-center py-[10rpx]'>
    <View className='notificationBox flex justify-center items-center py-[10rpx] rounded-2xl w-[85%] bg-[white] shadow-md'>
      <Text className='text-[#F77D76]'>通知</Text>
      <View className='px-[20rpx]'></View>
      <Text className='text-[#ABABAB] text-[25rpx]'>请查看最新的消息</Text>
    </View>

  </View>
}


function DateCom(){
  return <View className='flex flex-row bg-[white] text-center py-[10rpx] text-[#717171]'>
    <View className='flex flex-col flex-1 border-r-[#5596E0]'>
      <Text>坚持天数</Text>
      <Text className='text-[#7AA5D9] text-[30rpx]'>9</Text>
      <Text>排名1名</Text>
    </View>
    <View className='w-[10rpx] bg-[#5596E0] my-[30rpx]'></View>
    <View className='flex flex-col flex-1 justify-center'>
      <Text>刷题正确率</Text>
      <Text className='text-[#7AA5D9] text-[30rpx]'>20%</Text>
      <Text>排名7名</Text>
    </View>
  </View>
}

function Prompt(){
  return <View>
    <View className='bg-[white] flex flex-col justify-center px-[20rpx] py-[10rpx] text-[#717171]'>
      <Text className='border-b border-solid border-red-50  py-[20rpx]'>打卡提醒</Text>
      <Text className='py-[20rpx]'>考试倒计时</Text>
    </View>
  </View>
}

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index bg-[#F5F5F5] flex flex-col'>
      <SwiperCom></SwiperCom>
    {/*  通知*/}
      <Notification></Notification>
      <View className='my-[15rpx]'>
        <DateCom></DateCom>
      </View>
      <View>
        <Questions></Questions>
      </View>
      <View className='mt-[10rpx]'>
        <Prompt></Prompt>
      </View>

    </View>
  )
}

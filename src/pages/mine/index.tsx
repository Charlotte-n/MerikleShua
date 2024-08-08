import {memo} from "react";
import {View, Text, Image, Button} from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import Avatar from '../../public/img/avatar.png'
import AtButton from "../../components/AtButton";

const MyProfile = memo(function (){
  return <View className='flex flex-col items-center'>
    <Image className='w-[150rpx] h-[150rpx]' src={Avatar as string}></Image>
    <Text>拈花煮酒</Text>
  </View>
})

const MoreFunctionsData = [
  {
    title:'用户反馈',
    icon:''
  },{
    title:'关于我们',
    icon:''
  },

  {
    title:'分享应用',
    icon:''
  },
  {
    title:'设置',
    icon:''
  }
]
const MoreFunction = memo(function () {
  return(
    <View>
      {
        MoreFunctionsData.map((item,index)=>{
          return <View key={item.title} className='py-[15rpx]  cursor-pointer ' style={MoreFunctionsData.length - 1 === index?{}:{ borderBottom:'1rpx solid #F7F7F7'}}>
            {
              item.title === '分享应用'?<AtButton openType='share' className='border-none text-left outline-0'>
                {
                  {
                    content:'分享应用'
                  }
                }
              </AtButton>:<Text >{item.title}</Text>
            }
          </View>
        })
      }
    </View>
  )

})
const MyContent = memo(function (){
  return <View>
    <View className='border-b border-solid border-[#F7F7F7] pb-[20rpx]'>
      <Text>个人服务</Text>
    </View>
    <View className='flex flex-row justify-between px-[100rpx] py-[50rpx]'>
      <View className='flex flex-col items-center'>
        <Text>0</Text>
        <Text className='mt-[10rpx]'>做题量</Text>
      </View>
      <View className='flex flex-col items-center'>
        <Text>0</Text>
        <Text  className='mt-[10rpx]'>考试数量</Text>
      </View>
    </View>
  </View>
})


export default function Mine () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index bg-[#F5F5F5] h-[100vh]'>
      <View className='flex justify-center items-center py-[100rpx]'>
        <MyProfile></MyProfile>
      </View>
      <View  className='mx-[20rpx] mb-[20rpx] bg-[white] rounded-md p-[20rpx]'>
        <MyContent></MyContent>
      </View>
      <View className='mx-[20rpx] bg-[white] rounded-md p-[20rpx]'>
        <MoreFunction></MoreFunction>
      </View>
    </View>
  )
}

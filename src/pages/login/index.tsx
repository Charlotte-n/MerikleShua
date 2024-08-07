import {View, Text, Image, Button} from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import iconPng from '../../public/img/icon.png'


function handlePreview(){
  Taro.switchTab({
    url: '/pages/index/index'
  })
}
export default function Login () {
  useLoad(() => {
    console.log('Page loaded.')
  })
  function HandleLogin(){
    Taro.login({
      success: function (res) {
        console.log(res.code,"成功了")
        //登录成功之后就获取用户信息

        //接着跳转
      },
      fail: function () {
        Taro.switchTab({
          url: '/pages/index/index'
        })
      },

    })
  }

  return (
    <View className='flex justify-center items-center h-[100vh] flex-col'>
      {/*图标*/}
      <View className='mb-[200rpx]'>
        <Image src={iconPng as string} className='w-[150rpx] h-[150rpx] text-[150rpx] '></Image>
        <View>
          <Text>离散刷题</Text>
        </View>
      </View>
      {/*登录*/}
      <View className=''>
        <Button onClick={HandleLogin} className='px-[100rpx] py-[20rpx] bg-[#FF7300] text-[white] mb-[50rpx]' hoverClass='bg-[#F3CA7E]'>一键微信授权</Button>
      </View>

      {/*预览*/}
      <View>
        <Text className=' text-[red] cursor-pointer' onClick={handlePreview}>预览</Text>
      </View>


    </View>
  )
}

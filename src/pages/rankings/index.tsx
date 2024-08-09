import {FC, memo, useEffect, useState} from "react";
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import Ranking from "./components/ranking/ranking";
import Grade from "./components/grade/grade";

interface TabBarProps{
  getCurrentTab: (current:string)=>void
}

const TabBar:FC<TabBarProps> = memo(function ({getCurrentTab}){
  const [current, setCurrent] = useState('ranking')
  function handleRankingClick(){
    setCurrent('ranking')
  }
  function handleGradeClick(){
    setCurrent('grade')

  }

  useEffect(() => {
    getCurrentTab(current)
  }, [current, getCurrentTab]);
  return <View className='flex border border-solid border-[white] rounded-sm '>
    <View onClick={handleRankingClick} className={`pr-[20rpx] pl-[20rpx] py-[20rpx] border-r border-solid border-[white] cursor-pointer ${current === 'ranking'?'bg-[white] text-[#63B0F7]':null}`}>
      <Text>排行榜</Text>
    </View>
    <View onClick={handleGradeClick} className={`pl-[20rpx] pr-[20rpx] py-[20rpx] cursor-pointer ${current === 'grade'?'bg-[white] text-[#63B0F7]':null}`}>
      <Text>我的成绩</Text>
    </View>
  </View>
})


export default function Rankings () {
  useLoad(() => {
    console.log('Page loaded.')
  })
  const [currentVal, setCurrentVal] = useState('ranking')
  function getCurrentTab(current:string){
    setCurrentVal(current)
  }

  useEffect(() => {

  }, []);

  return (
    <View className='rankings h-[100vh] text-[white] '>
      <View className='bg-[#63B0F7] relative flex flex-col h-[40%]'>
        <View className='h-[100%] flex justify-center items-center'>
          <TabBar getCurrentTab={getCurrentTab}></TabBar>
        </View>
        <View className='pb-[35rpx] px-[20rpx] absolute bottom-[60rpx]'>
          {
            currentVal === 'ranking'?<Text>课堂排名</Text>:<Text>我的成绩</Text>
          }
        </View>
        {
          currentVal === 'ranking'?
          <View className='absolute w-[100vw] bottom-[-50rpx] h-[20%] bg-[white] rounded-2xl px-[50rpx] py-[30rpx]'>
            <Ranking></Ranking>
          </View>:
          <View className='absolute w-[100vw] bottom-[-50rpx] h-[20%] bg-[white] rounded-2xl px-[50rpx] py-[30rpx]'>
            <Grade></Grade>
          </View>
        }
      </View>


    </View>
  )
}

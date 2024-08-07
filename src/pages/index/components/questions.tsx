import React, {memo, useEffect, useMemo} from 'react'
import type {FC, ReactNode} from 'react'
import {Image, Text, View} from "@tarojs/components";
import Target from '../../../public/img/target.png'
import TIXING from '../../../public/img/tixing.png'
import LUANXU from  '../../../public/img/suiji.png'
import COLLECT from  '../../../public/img/collect.png'
import ERROR from  '../../../public/img/errorquestion.png'
import EDIT from '../../../public/img/edit.png'
import KNOWLEDGE from '../../../public/img/knowledge.png'
import RESUME from '../../../public/img/resume.png'
import  './index.scss'

interface IProps {
  children?: ReactNode
}

interface IconItemProps{
  color:string;
  icon:string;
  title:string;
}

const IconItems = [
  {
    color:'#52DAC4',
    icon:Target,
    title:'专项刷题'
  },
  {
    color:'#F77D76',
    icon:TIXING,
    title:'题型刷题'
  },
  {
    color: '#FFC251',
    icon:LUANXU,
    title: '乱序刷题'
  },
  {
    color: '#6BB2F9',
    icon:COLLECT,
    title: '我的收藏'
  }
]

const IconItems2 = [
  {
    color:'#FF8D85',
    title:'我的错题',
    icon:ERROR
  },
  {
    color: '#68B3FB',
    title:'未作习题',
    icon:EDIT
  },
  {
    color: '#FFB249',
    title:'刷知识点',
    icon:KNOWLEDGE
  },
  {
    color: '#4DD3BD',
    title:'自我评测',
    icon:RESUME
  }
]
const  IconItem:FC<IconItemProps>=function ({color, icon,title}){
  const colorEnd = useMemo(() => {
   return `rounded-md bg-[${color}] w-[80rpx] h-[80rpx] flex  justify-center items-center`
  },[color]);
  return <View className='flex flex-col  items-center mt-[20rpx] cursor-pointer' >
    <View className={colorEnd} style={{
      backgroundColor:color,
    }}>
      <Image src={icon} className='w-[75%] h-[75%] '></Image>
    </View>
    <Text className='mt-[20rpx]'>{title}</Text>
  </View>
}
const Questions: FC<IProps> = () => {

  return (
    <View className='flex bg-[white] py-[50rpx] justify-center'>
      <View className='flex flex-col flex-1'>
        {
          IconItems.map((item,index)=>{
            return <IconItem key={item.color} {...item}></IconItem>
          })
        }
      </View>
      <View className='flex flex-col flex-1 justify-between my-[50rpx]'>
        <View className='OrderBox flex items-center  justify-center bg-[#479BF4] w-[200rpx] h-[200rpx] rounded-full text-[white] cursor-pointer'>
          顺序练习
        </View>
        <View className='TestBox flex items-center justify-center bg-[#41CDBD] w-[200rpx] h-[200rpx] rounded-full text-[white] cursor-pointer'>
          模拟考试
        </View>
      </View>
      <View className='flex flex-col flex-1'>
        {
          IconItems2.map((item,index)=>{
            return <IconItem key={item.color} {...item}></IconItem>
          })
        }
      </View>
    </View>
  )
}

export default memo(Questions)

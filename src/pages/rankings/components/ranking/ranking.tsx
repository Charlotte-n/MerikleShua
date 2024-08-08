import React, {memo, useState} from 'react'
import type {FC, ReactNode} from 'react'
import {Text, View,Image} from "@tarojs/components";
import WIN from '../../../../public/img/Win.png'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  const [RankingData, setRankingData] = useState([])
  return (
    <View className=' text-[#BEBEBE] text-[30rpx]'>
      <View className='flex'>
        <View className='w-[20%]'>
          <Text>排名</Text>
        </View>
        <View className='flex-1'>
          <Text>昵称</Text>
        </View>
        <View className='w-[20%]'>
          <Text>分数(分)</Text>
        </View>
      </View>
      <View className='flex justify-center items-center'>
        {
          RankingData.length?null:<View className='flex flex-col items-center'>
            <Image src={WIN as string} className='w-[300rpx] h-[300rpx] mt-[100rpx]'></Image>
            <Text className='mt-[30rpx]'>暂无排名</Text>
          </View>
        }
      </View>
    </View>
  )
}

export default memo(Ranking)

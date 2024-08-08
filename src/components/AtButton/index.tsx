import React from 'react'
import type {FC, ReactNode} from 'react'
import {Button, ButtonProps, View} from "@tarojs/components";
import './index.scss'

interface IProps {
  children?: any
  className?:string
  openType?:ButtonProps.OpenType
}



const AtButton: FC<IProps> = ({className,openType,children }) => {
  const {content} = children

  return (
    <View className='myButton'>
      <Button className={className} openType={openType}>
        {content}
      </Button>
    </View>
  )
}

export default AtButton

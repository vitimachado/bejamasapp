import React from 'react'

import {
  Img,
  WrapperTextLabel,
  WrapperText,
  WrapperContainer,
  WrapperOtherDetails,
  WrappeSizeDetails,
  WrapperImgs, } from './style'
  import { IProduct } from '../../../shared/models/product'
  import Image from 'next/image'


const DetailsProduct: React.FC<IProduct.IProps> = (props): JSX.Element => {
  return (
    <WrapperContainer>
      <div>
        <WrapperTextLabel>
          <label>{props?.details?.title}</label>
          <span>{props?.details?.subtitle}</span>
        </WrapperTextLabel>
        <WrapperText>{props?.details?.description}</WrapperText>
      </div>
      <WrapperOtherDetails>
        <WrapperTextLabel align="rigth">
          <label>People Also Buy</label>
          <WrapperImgs>
            {
              props?.details?.recommendations
              .slice(0, 3)
              .filter(recommendation => recommendation?.src)
              .map(image =>
                <Image
                  key={image?.src}
                  src={image?.src}
                  alt={image?.alt}
                  width={70}
                  height={90}
                  objectFit="cover"
                  quality={50}
                />
              )
            }
          </WrapperImgs>
        </WrapperTextLabel>
        <WrapperTextLabel align="rigth">
          <label>Details</label>
          <WrappeSizeDetails>
            Size: {props?.details?.dimmentions?.width} x {props?.details?.dimmentions?.height} pixel
          </WrappeSizeDetails>
          <WrappeSizeDetails>
            Size: {props?.details?.size && props?.details?.size / 1000} mb
          </WrappeSizeDetails>
        </WrapperTextLabel>
      </WrapperOtherDetails>
    </WrapperContainer>
  )
}

export default DetailsProduct

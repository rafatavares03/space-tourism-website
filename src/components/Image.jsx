import React from 'react';

export const Image = ({data}) => {
  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <>
            <img key={index} src={require(`../assets/images/destination/${item.images.blue}`)} alt="" />
            </>
            
          )
        })}
      </div>
    </>
  )
}
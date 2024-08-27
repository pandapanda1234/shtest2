import React from 'react';
import backgroundImage from './azarashi.jpg'; // 画像ファイルをインポート

const BGI = ({children}) => {
  const backgroundImageStyle = {
    position: 'absolute',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    opacity: '0.5',
    zIndex:'-1',
    
  };
  
  const backgroundwrapper ={
    //position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden', /* 背景画像が親の境界を超えないようにする */
  };

  const content={
    //position: 'relative',
    zindex: '1', /* 背景画像よりも前に配置 */
  }

  return (
    <>
    <div style={backgroundwrapper}>
    <div style={backgroundImageStyle}></div>
        
    <div style={content}>
        {children}
    
    </div>
    </div>
    </>
    
  );
};

export default BGI;

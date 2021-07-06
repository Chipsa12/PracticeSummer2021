import React from 'react';
import './file.css'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
const File = ({file}) => {
    const year = file.date.slice(0,4)
    const month = file.date.slice(4,7)
    const day = file.date.slice(8,10)
    const data = day + month + '-' + year
    return (
        <div className='file'>
            <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img"/>
            <div className="file__name">{file.name}</div>
            <div className="file__date">{data}</div>
            <div className="file__size">{file.size}</div>
        </div>
    );
};

export default File;

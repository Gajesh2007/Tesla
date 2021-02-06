import React from 'react';
import Button from './Button.js';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './item.css';

const Item = ({title, desc, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnLink, rightBtnTxt, twoButtons, first}) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">
                        <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
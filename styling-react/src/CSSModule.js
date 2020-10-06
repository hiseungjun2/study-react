import React from 'react';
import styles from './CSSModule.module.scss'
import classNames from 'classnames/bind'

const cs = classNames.bind(styles);     // 미리 styles 에서 클래스를 받아 오도록 설정한다.
const CSSModule = () => {
    return (
        // <div className={`${styles.wrapper} ${styles.inverted}`}>\
        <div className={cs('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;
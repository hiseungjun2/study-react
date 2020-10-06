import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* rsc 사용하면 함수형 컴포넌트 snippet으로 자동 생성  */
// const MyComponent = ({name, favoriteNumber , children}) => {
//     /* 비구조화 할당 문법 */
//     //const {name, children} = props;

//     return (
//         <div>
//             안녕하세요 제 이름은 {name} 입니다.<br/>
//             children 값은 {children} 입니다.
//             <br/>
//             제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//         </div>

//     )
// };

/* rcc 사용하면 클래스형 컴포넌트로 생성 */
class MyComponent extends Component {
    static defaultProps = {
        name : "기본이름 일까?"
    };

    static propTypes = {
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    }

    render() {
        const {name, favoriteNumber, children} = this.props;

        return (
            <div>
                안녕하세요 제 이름은 {name} 입니다.<br/>
                children 값은 {children} 입니다.
                <br/>
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}

// /* default props 설정 */
// MyComponent.defaultProps = {
//     name : '기본 이름'
// }

// /* propType 선언 */
// MyComponent.prototype = {
//     // string 타입을 기본으로
//     name : PropTypes.string,
//     // number 기본 타입에 필수요소로
//     favoriteNumber : PropTypes.number.isRequired
// }

export default MyComponent;

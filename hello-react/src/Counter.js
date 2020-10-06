import React, { Component } from 'react';

class Counter extends Component {
    // 생성자 선언
    // constructor(props) {
    //     super(props);
    //     // state의 초기값 설정
    //     this.state = {
    //         number : 0,
    //         fixedNumber : 0
    //     }
    // }

    state = {
        number : 0,
        fixedNumber : 0
    }

    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회한다.

        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button onClick={() => {
                    // this.setState(prevState => {
                    //     return {
                    //         number : prevState.number + 1
                    //     }
                    // });
                    // // 위 코드와 아래 코드는 완전히 똑같은 기능
                    // // 아래 코드는 함수에서 바로 객체를 반환
                    // this.setState(prevState => ({
                    //     number : prevState.number + 1
                    // }));
                    
                    /* setState의 콜백 선언 */
                    this.setState({
                        number : number + 1
                    }, () => {
                        console.log("방금 setState가 호출됨");
                        console.log(this.state)
                    })
                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
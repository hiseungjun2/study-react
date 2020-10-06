import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number : 0,
        color : null
    }

    myRef = null;       // ref 를 설정할 부분

    // 생성자 선언
    constructor(props) {
        super(props);       // 왜 사용안함일까..
        console.log('constructor');
    }

    // props 로 받아온 값을 state 에 동기화시키는 용도
    // 컴포넌트가 마운트될 때와 업데이트될 때 호출
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps !== prevState.color) {
            return {color: nextProps.color};
        }

        return null;
    }

    // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행
    componentDidMount() {
        console.log('componentDidMount');
    }

    // 리렌더링을 시작할지 여부를 지정
    // 반드시 true / false 반환해야 됨
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        // 숫자의 마지막 자리가 4 이면 리렌더링하지 않는다
        return nextState.number % 10 !== 4 ;
    }

    // 컴포넌트를 DOM에서 제거할 때 실행
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // click 이벤트
    handleClick = (e) => {
        this.setState({
            number : this.state.number + 1
        })
    }

    // rendr 에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
    // 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color
        };

        return null;
    }

    // 리렌더링 완료된 후 실행
    // 컴포넌트가 이전에 가졌던 데이터에 접근 가능
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if (snapShot) {
            console.log('업데이트 되기 직전 색상 : ' + snapShot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color : this.props.color
        }

        return (
            <div>
                {/* {this.props.missing.value} */}
                <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;
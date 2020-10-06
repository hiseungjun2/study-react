import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state ={
        error : false
    }

    // 컴포넌트 렌더링 도중에 에러가 발생했을 때 오류 UI 보여줄 수 있게 함
    componentDidCatch(error, info) {
        this.setState({
            error : true
        })
        console.log({error, info});
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    에러가 발생하였습니다.
                </div>
            )
        }

        return (
            this.props.children
        );
    }
}

export default ErrorBoundary;
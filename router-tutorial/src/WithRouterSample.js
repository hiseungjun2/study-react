import React from 'react';
import {withRouter} from 'react-router-dom'

// withRouter 함수는 HoC(Higher-order component), 라우트로 사용된 컴포넌트가 아니더라도 
// match, location, history 객체에 접근할 수 있게 해준다.
const WithRouterSample = ({location, match, history}) => {
    return (
        <div>
            <h4>location</h4>
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={7}
                readOnly={true}
            />
            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={7}
                readOnly={true}
            />
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    );
};

// withRouter 사용할 때는 컴포넌트를 내보내줄때 함수로 감싸준다.
export default withRouter(WithRouterSample);
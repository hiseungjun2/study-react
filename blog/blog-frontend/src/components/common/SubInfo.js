import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
    /* props 로 hasMarginTop 값이 true 가 아니면 상단여백을 안준다. */
    ${props =>
        props.hasMarginTop &&
        css`
            margin-top : 1rem;
        `
    }
    color : ${palette.gray[6]};

    /* span 사이에 가운뎃점 문자 보여주기 */
    span + span:before {
        color : ${palette.gray[4]};
        padding-left : 0.25rem,
        padding-right : 0.25rem,
        content : '\\B7';   /* 가운뎃점 문자 */
    }
`;

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
    return (
        <SubInfoBlock hasMarginTop={hasMarginTop}>
            <span>
                <b>
                    <Link to={`/@${username}`}>{username}</Link>
                </b>
            </span>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfoBlock>
    );
};

export default SubInfo;
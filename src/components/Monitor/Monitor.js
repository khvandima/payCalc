import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1E1F21;
    color: #DCDDDD;
    padding: 16px;
`;

const TextWrapper = styled.span`
    font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
    font-weight: bold;
    margin-right: 8px;
`;

const ButtonWrapper = styled.button`
    border: unset;
    background-color: #565759;
    height: 20px;
    margin-right: 2px;
    border-radius: 4px;
    color: #E6E6E6; 
    padding-right: 5px;
    padding-left: 5px;
`;

const TodayButton = styled(ButtonWrapper)`
    padding-right: 16px;
    padding-left: 16px;
    font-weight: bold;
`;

const Monitor = () => {
    return (
        <DivWrapper>
            <div>
                <TitleWrapper>October</TitleWrapper>
                <TextWrapper>2021</TextWrapper>
            </div>
            <div>
                <ButtonWrapper>&lt;</ButtonWrapper>
                <TodayButton>Today</TodayButton>
                <ButtonWrapper>&gt;</ButtonWrapper>
            </div>
            
        </DivWrapper>
    )
}

export default Monitor

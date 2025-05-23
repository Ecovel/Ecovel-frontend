import styled from "styled-components";

export const HeaderIconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const IconButton = styled.button`
    width: 24px;
    height: 24px;
`

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`

export const Title = styled.h1`
    font-size: 22px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`

export const Image = styled.img`
    width: 180px;
    height: 180px;
    margin: 15px 0;
`

export const DayWrapper = styled.div`
    width: 100%;
`

export const Day = styled.h3`
    font-size: 20px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
    width: 100%;
    margin-bottom: 15px;
`

export const PlaceWrapper = styled.div`
    background-color: #F7F7F7;
    border: 1px solid #D9D9D9;
    border-radius: 15px;
    width: 100%;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`

export const Place = styled.h4`
    font-size: 18px;
    font-family: ${({ theme }) =>
    theme.fonts.PretendardSemiBold["font-family"]};
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const TransportWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    margin-top: 10px;
`

export const TimeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const TransportIcon = styled.img`
    width: 16px;
    height: 16px;
`

export const Time = styled.p`
    font-family: ${({ theme }) =>
    theme.fonts.PretendardMedium["font-family"]};
    color: #A1A1A1;
`

export const PlaceImage = styled.img`
    width: 55px;
    height: 55px;
`
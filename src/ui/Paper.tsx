import styled from "styled-components";
import {ReactNode, useEffect, useState} from "react";


const StyledPaper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Paper = ({children}: {children: ReactNode}) => {
    const [height, setHeight] = useState<number>(0)
    useEffect(() => {
        console.log(window.innerHeight)
        setHeight(window.innerHeight);
    }, [])

    return (
        <StyledPaper style={{
            height: `${height}px`
        }}>
            {children}
        </StyledPaper>
    )
}
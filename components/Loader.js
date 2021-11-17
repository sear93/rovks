import styled from "styled-components";
import Loader from 'react-loader-spinner'

export const LoaderComponent = () => {
    return (
        <LoaderWrapper>
            <Loader type="TailSpin" color="#00BFFF" height={120} width={120}/>
        </LoaderWrapper>
    )
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`

import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
`

export const Heading1 = styled.h1`
  color: #35469c;
  font-size: props.size;
`

export const Maincontainer = styled.div`
  padding-left: 40px;
  display: flex;
  flex-direction: row;
`
export const Normalcnt = styled.div`
  width: 50%;
`

export const Normalcnt1 = styled.div`
  background-image: url(`${props.image}`);

  width: 50%;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

export const Label = styled.label`
  color: #7e858e;
`
export const Inputcontainers = styled.div`
  margin-bottom: 20px;
`

export const Inputele = styled.input`
  width: 250px;
`

export const Select = styled.select`
  width: 250px;
`

export const Options = styled.option``

export const Button = styled.option`
  color: #fff;
  background-color: #0b69ff;
  border-style: none;
  font-weight: 600;
  width: 150px;
  padding: 5px;
  border-radius: 4px;
  text-align: center;
`

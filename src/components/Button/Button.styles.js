import styled from 'styled-components';

export const Wrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.marginTop || '5px'}
  width: 100%;
  height: 39px;
  border-radius: 4px;
  color: ${props => props.color || '#fff'};
  background-color: ${props => props.backgroundColor || '#000'};
`;

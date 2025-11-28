import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.PURPLE_500};
  `}
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-vertical: 8px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

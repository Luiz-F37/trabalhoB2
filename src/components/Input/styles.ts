import styled, { css } from 'styled-components/native';

export const Container = styled.TextInput`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

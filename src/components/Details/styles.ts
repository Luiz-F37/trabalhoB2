import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  padding-top: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
  margin-bottom: 20px;
`;

export const Field = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 8px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 6px;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
  `}
`;

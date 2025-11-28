import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 12px;
    padding-top: 16px;
    border-bottom-width: 1px;
    border-color: ${theme.COLORS.GRAY_200};
    background-color: ${theme.COLORS.WHITE};
  `}
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: 6px 8px;
    background-color: ${theme.COLORS.GRAY_300};
    border-radius: 6px;
    margin-left: 8px;
  `}
`;

export const IconLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;

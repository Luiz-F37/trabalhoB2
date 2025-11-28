import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 12px;
`;

export const FieldRow = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`;

export const SmallButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.RED};
  `}
  padding: 8px 10px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

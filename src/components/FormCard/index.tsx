import React from 'react';
import { Container, Title, Subtitle, Actions, IconButton, IconLabel } from './styles';
import { FormData } from '../../storage/formStorage';

type Props = {
  data: FormData;
  onPress?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onDetails?: () => void;
};

export default function FormCard({ data, onPress, onEdit, onDelete, onDetails }: Props) {
  return (
    <Container onPress={onPress}>
      <Title>{data.title}</Title>
      <Subtitle>{new Date(data.createdAt).toLocaleDateString()}</Subtitle>

      <Actions>
        <IconButton onPress={onEdit}>
          <IconLabel>Editar</IconLabel>
        </IconButton>

        <IconButton onPress={onDetails}>
          <IconLabel>Ver</IconLabel>
        </IconButton>

        <IconButton onPress={onDelete}>
          <IconLabel>Del</IconLabel>
        </IconButton>
      </Actions>
    </Container>
  );
}

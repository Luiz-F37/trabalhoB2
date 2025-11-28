import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';import { FormData } from '../../storage/formStorage';
import { Container, FieldLabel, FieldValue, Title } from './styles';

export default function Details() {
  const route = useRoute();
  const { form } = (route.params || {}) as { form: FormData };

  return (
    <Container>
      <Title>{form.title}</Title>
      {form.fields.map(f => (
        <View key={f.id} style={{ marginTop: 8 }}>
          <FieldLabel>{f.label}</FieldLabel>
          <FieldValue>{f.value || '-'}</FieldValue>
        </View>
      ))}
    </Container>
  );
}

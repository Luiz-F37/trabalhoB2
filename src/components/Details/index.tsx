import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Container, Field, Label, Title, Value } from './styles';


export default function Details() {
  const route = useRoute<any>();
  const { form } = route.params;

  return (
    <Container>
      <Title>{form.title}</Title>

      {form.fields.map((f: any) => (
        <Field key={f.id}>
          <Label>{f.label}</Label>
          <Value>{f.value || '—'}</Value>
        </Field>
      ))}
    </Container>
  );
}

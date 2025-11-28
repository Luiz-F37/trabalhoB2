// src/screens/CreateForm/index.tsx
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../components/Input';
import { saveForm } from '../../storage/formStorage';
import uuid from 'react-native-uuid';
import { AddButton, AddButtonText, Container, SaveButton, SaveButtonText, Title } from './styles';

// 📌 SCHEMA DO FORMULÁRIO
const fieldSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string().optional()
});

const formSchema = z.object({
  title: z.string(),
  fields: z.array(fieldSchema)
});

export type FormType = z.infer<typeof formSchema>;

export default function CreateForm({ navigation }: any) {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      fields: []
    }
  });

  const { fields, append } = useFieldArray({
    control,
    name: "fields"
  });

  function addField() {
    append({
      id: String(uuid.v4()),
      label: "",
      value: ""
    });
  }

  async function onSubmit(data: FormType) {
    await saveForm(data);
    navigation.goBack();
  }

  return (
    <Container>

      <Title>Criar Formulário</Title>

      {/* INPUT DO TÍTULO */}
      <Input
        placeholder="Título do formulário"
        value={watch("title")}
        onChangeText={(t) => setValue("title", t)}
      />

      {fields.map((field, index) => (
        <React.Fragment key={field.id}>
          <Input
            placeholder="Nome do campo"
            value={watch(`fields.${index}.label`)}
            onChangeText={(t) => setValue(`fields.${index}.label`, t)}
          />

          <Input
            placeholder="Resposta (opcional)"
            value={watch(`fields.${index}.value`) ?? ""}
            onChangeText={(t) => setValue(`fields.${index}.value`, t)}
          />
        </React.Fragment>
      ))}

      <AddButton onPress={addField}>
        <AddButtonText>Adicionar Campo</AddButtonText>
      </AddButton>

      <SaveButton onPress={handleSubmit(onSubmit)}>
        <SaveButtonText>Salvar Formulário</SaveButtonText>
      </SaveButton>

    </Container>
  );
}

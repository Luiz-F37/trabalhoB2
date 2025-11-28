import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';


type Props = TextInputProps & {
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
};

export default function Input(props: Props) {
  return <Container {...props} />;
}

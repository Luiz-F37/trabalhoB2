import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import FormCard from '../../components/FormCard';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { getForms, deleteForm, FormData } from '../../storage/formStorage';
import { Container, List, Title } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/navigation';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type NavProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<NavProps>();
  const isFocused = useIsFocused();

  const [forms, setForms] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const data = await getForms();
      setForms(data);
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível carregar formulários');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isFocused) load();
  }, [isFocused]);

  function handleDelete(id: string) {
    Alert.alert('Confirmar', 'Deseja excluir esse formulário?', [
      { text: 'Cancelar', style: 'cancel' },
      { 
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          await deleteForm(id);
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          load();
        }
      }
    ]);
  }

  function handleEdit(item: FormData) {
    navigation.navigate('CreateForm', { form: item });
  }

  function handleDetails(item: FormData) {
    navigation.navigate('Details', { form: item });
  }

  const filtered = forms
    .filter(f => f.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a,b) => 
      sortAsc
        ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  return (
    <Container>
      <Title>Bem-vindo! Criar formulário</Title>

      <Button 
        title="Criar novo formulário"
        onPress={() => navigation.navigate('CreateForm')}
      />

      <Input 
        placeholder="Buscar..."
        value={query}
        onChangeText={setQuery}
      />

      <Button 
        title={sortAsc ? "Ordenar: Mais antigo" : "Ordenar: Mais recente"}
        onPress={() => setSortAsc(prev => !prev)}
      />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <List>
          {filtered.map(item => (
            <FormCard
              key={item.id}
              data={item}
              onPress={() => handleDetails(item)}
              onEdit={() => handleEdit(item)}
              onDelete={() => handleDelete(item.id)}
              onDetails={() => handleDetails(item)}
            />
          ))}
        </List>
      )}
    </Container>
  );
}

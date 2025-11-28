import AsyncStorage from '@react-native-async-storage/async-storage';

export type FormField = {
  id: string;
  label: string;
  value?: string;
};

export type FormData = {
  id: string;
  title: string;
  fields: FormField[];
  createdAt: string;
};

const KEY = '@forms';

export async function getForms(): Promise<FormData[]> {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export async function saveForm(form: FormData) {
  const current = await getForms();
  const exists = current.find(f => f.id === form.id);
  if (exists) {
    const updated = current.map(f => f.id === form.id ? form : f);
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
    return;
  }
  await AsyncStorage.setItem(KEY, JSON.stringify([...current, form]));
}

export async function deleteForm(id: string) {
  const current = await getForms();
  const filtered = current.filter(f => f.id !== id);
  await AsyncStorage.setItem(KEY, JSON.stringify(filtered));
}

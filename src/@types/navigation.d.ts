export type RootStackParamList = {
  Home: undefined;
  CreateForm: {
    form?: import("../storage/formStorage").FormData;
  } | undefined;
  Details: {
    form: import("../storage/formStorage").FormData;
  };
};

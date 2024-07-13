import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ListStateProps } from "../../contexts/localeContext";
import { useLocale } from "../../hooks/useLocale";

import {
  ButtonSelectState,
  InputErrorMessage,
  LocaleHeader,
  LocaleInputContainer,
  LocaleInputForm,
  SelectStates,
} from "./styles";

interface LocaleInputProps {
  listStates: ListStateProps[];
}

const stateSelectionsFormSchema = z.object({
  state: z.coerce.number().min(1, { message: "Escolha um estado válido." }),
});

type StateSelectionsFormSchemaTypes = z.infer<typeof stateSelectionsFormSchema>;

export function LocaleInput({ listStates }: LocaleInputProps) {
  const { selectState } = useLocale();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StateSelectionsFormSchemaTypes>({
    resolver: zodResolver(stateSelectionsFormSchema),
  });

  const hasErrorsInForm = errors.state ? true : false;

  function handleStateSelectionForm(data: StateSelectionsFormSchemaTypes) {
    selectState(data.state);
  }

  return (
    <LocaleInputContainer>
      <LocaleInputForm onSubmit={handleSubmit(handleStateSelectionForm)} data-aos="zoom-in">
        <LocaleHeader>
          <label htmlFor="states">Selecione seu estado</label>
          <h2>Simplifique sua entrega :)</h2>
        </LocaleHeader>

        <SelectStates data-state={hasErrorsInForm} {...register("state")}>
          <option value="">Selecione seu estado</option>

          {listStates.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.nome}
              </option>
            );
          })}
        </SelectStates>

        {errors.state && (
          <InputErrorMessage>{errors.state.message}</InputErrorMessage>
        )}

        <ButtonSelectState type="submit">Confirmar</ButtonSelectState>
      </LocaleInputForm>
    </LocaleInputContainer>
  );
}

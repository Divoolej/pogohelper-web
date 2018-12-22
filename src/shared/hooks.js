import { useState } from 'react';

import { validatePresence } from 'shared/validators';

export const useInputState = (initialValue, validate = validatePresence) => {
  const [value, onChange] = useState(initialValue);
  return { value, onChange, ok: validate(value) };
};

export const usePokemonTypeInput = (initialValue) => {
  const type = useInputState(initialValue, v => validatePresence(v && v.value));
  return {
    ...type,
    id: type.value && type.value.value,
    type: type.value && type.value.value && type.value.label,
  };
};

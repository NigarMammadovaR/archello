import * as React from 'react';
import Switch from '@mui/joy/Switch';

interface SwitchControlledProps {
  category: string;
  setSwitchState: (category: string, state: boolean) => void;
}

export default function SwitchControlled({ category, setSwitchState }: SwitchControlledProps) {
  const [checked, setChecked] = React.useState<boolean>(false);

  React.useEffect(() => {
    const storedState = localStorage.getItem(category);

    if (storedState) {
      setChecked(JSON.parse(storedState));
    }
  }, [category]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = event.target.checked;

    localStorage.setItem(category, JSON.stringify(newState));

    setChecked(newState);
    setSwitchState(category, newState);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
    />
  );
}

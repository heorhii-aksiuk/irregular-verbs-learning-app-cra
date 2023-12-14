interface Props {
  value: string;
}

export default function WordTranslation({ value }: Props) {
  return <input value={value} disabled />;
}

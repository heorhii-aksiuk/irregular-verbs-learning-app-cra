interface Props {
  value: string;
}

export default function WordTranslation({ value }: Props) {
  return (
    <input
      className="bg-gray-500/95 w-32 rounded font-semibold pl-2 "
      value={value}
      disabled
    />
  );
}

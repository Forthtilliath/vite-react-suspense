import useSWR from "swr";
import { URLS, URL_KEYS } from "../constants/data";

type Props = {
  type: URL_KEYS;
  hasError?: boolean;
};

export function Data({ type, hasError = false }: Props) {
  const { data } = useSWR(URLS[type]);

  if (hasError) {
    throw new Error('I crashed!');
  }

  return (
    <>
      {type}: {data?.length}
    </>
  );
}
export default function logger(object: unknown, message: string) {
  console.log(
    "%c =================== INFO LOG \n",
    "color: #22D3EE",
    `${typeof window !== "undefined" && window?.location.pathname}\n`,
    `message === ${message ?? ""}\n`,
    object
  );
}

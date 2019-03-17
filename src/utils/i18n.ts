const dict = {
  en: {
    streaming: "Streaming"
  }
};

export default function say(word: keyof typeof dict.en): string {
  return dict.en[word];
}

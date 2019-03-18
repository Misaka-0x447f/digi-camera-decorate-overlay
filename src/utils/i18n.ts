const dict = {
  en: {
    streaming: "Streaming",
    wifi: "MisakaDistributedBridgingNetwork",
    wifiStat: "wlan0 .. link up / secured / full duplex @ 10.0 Gbps",
    cam0: "cam0 ... 1280x720 @ 30fps / 1500kbps / autofocus",
    info: "御坂节点维护感知或覆写子系统"
  }
};

export default function say(word: keyof typeof dict.en): string {
  return dict.en[word];
}

export const downloadQR = (
  format: "png" | "svg",
  qrRef: React.RefObject<HTMLDivElement | null>,
) => {
  if (!qrRef?.current) return;

  const svg = qrRef.current.querySelector("svg");
  if (!svg) return;

  if (format === "svg") {
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "scanme-qr.svg";
    link.click();
    URL.revokeObjectURL(url);
  } else {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width * 2;
      canvas.height = img.height * 2;
      ctx?.scale(2, 2);
      ctx?.drawImage(img, 0, 0);
      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "scanme-qr.png";
      link.click();
    };
    img.crossOrigin = "anonymous";
    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgData)));
  }
};

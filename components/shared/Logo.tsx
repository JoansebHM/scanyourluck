import { QrCode } from "lucide-react";

interface Props {
  onClick?: () => void;
}

function Logo({ onClick }: Props) {
  return (
    <div className="flex items-center gap-2" onClick={onClick}>
      <QrCode className="h-8 w-8 text-primary" />
      <span className="text-xl font-semibold text-foreground">
        ScanYourLuck
      </span>
    </div>
  );
}

export default Logo;

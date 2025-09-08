import { Badge } from "@/components/ui/badge";
import { DeviceStatus } from "@/types/device";

interface DeviceStatusBadgeProps {
  status: DeviceStatus;
}

export const DeviceStatusBadge = ({ status }: DeviceStatusBadgeProps) => {
  const statusConfig = {
    online: {
      label: "Online",
      className: "bg-success text-success-foreground hover:bg-success/80"
    },
    offline: {
      label: "Offline",
      className: "bg-muted text-muted-foreground hover:bg-muted/80"
    },
    maintenance: {
      label: "Maintenance",
      className: "bg-warning text-warning-foreground hover:bg-warning/80"
    },
    error: {
      label: "Error",
      className: "bg-destructive text-destructive-foreground hover:bg-destructive/80"
    }
  };

  const config = statusConfig[status];

  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  );
};